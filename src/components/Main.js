import { useState, useEffect } from "react";
import Container from "./Container";
import Searcher from "./Searcher";
import "../styles/Main.css";

function Main({ showMainForm, hideMainForm }) {

  const [sectionsArray, setSectionsArray] = useState([]);
  const [photosArray, setPhotosArray] = useState([]);
  const [loadState, setLoadState] = useState("");

  // function that uses fetch to request photos from flickr API according to the value of searchTerm parameter
  // then takes a group of 12 photos to be displayed
  const requestPhotos = async (event, searchTerm, mainSection) => {

    // prevents the page from refreshing in case event parameter is not null
    if (event !== null) event.preventDefault();

    // ONLY MOBILE VERSION
    // hides the main form when a search of photos is made
    hideMainForm();

    try {
      // throws an error in case the searchbar is empty
      if (searchTerm === undefined || searchTerm === "") throw "Please, type a new word in the search bar";

      // displays the loader on the page
      setLoadState(true);
      
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=51cf2c639b83b5b64b20b360f128937d&tags=${searchTerm}&text=${searchTerm}&safe_search=1&media=photos&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(data => {
        // accesses to the array of photos URLs
        const resArray = data.photos.photo;

        // throws an error in case the searchTerm does not match any photo in Flickr
        if (resArray.length === 0) {
          setLoadState(false);
          throw "No pictures found, please search something else";
        }

        // randomly chooses the group of 12 photos that will be displayed
        const limit = resArray.length - 12;
        const startNumber = Math.floor(Math.random() * limit);
        const endNumber = startNumber + 12;

        // pushes into "dataPhotos" the group of 12 photos
        const dataPhotos = [];
        for (let i = startNumber; i < endNumber; i++) {
          dataPhotos.push(resArray[i]);
        }
        // calls getURLS function
        // this function builds the URL of each photo by obtaining specific data in dataPhotos array
        getURLS(dataPhotos, searchTerm, mainSection);
      })
      .catch((error) => {                         // catches the error from the fetch API promise
        window.alert(error);
        console.log(error);
      });
      
    } catch (error) {                             // catches the error from the try/catch statement
      window.alert(error);
      console.log(error);
    }
  }

  const getURLS = async (resArray, searchTerm, mainSection) => {
    const dataPhotos = await resArray;
    const URLS = [];

    // pushes into "URLS" the URL of each photo
    for (const photo of dataPhotos) {
      let url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
      URLS.push(url);
      }

      // if mainSection parameter is true updates the photos in the main section container
      if (mainSection) setPhotosArray(URLS);
      // calls addSection function
      // this function adds a new section into the secondary sections container
      else addSection(URLS, searchTerm);

      // hides the loader on the page
      setLoadState(false);
  }

  const addSection = (URLS, searchTerm) => {
    const newID = sectionsArray.length + 1;

    // creates an object that contains the information necessary to render a new section
    const newSection = {
      id: newID,
      categoryTitle: searchTerm,
      urls: URLS
    };

    // places the new section into the array of sections and renders all the sections
    const newSectionsArray = [...sectionsArray, newSection];
    setSectionsArray(newSectionsArray);
  }

  // call the "requestPhotos" function only once at the beginning
  useEffect(() => {
    requestPhotos(null, "landscape", true);
  }, [])

  return (
    <main className="main">
      {/* search form */}
      <Searcher 
      requestPhotos={requestPhotos} 
      showMainForm={showMainForm} />

      {/* loader */}
      <div className="loader-container">
        <div className={`loader ${loadState ? "" : "hidden"}`}></div>
      </div>
      
      {/* main section container */}
      <Container
      id={0}
      urls={photosArray} />
      {/* secondary sections container */}
      {
        // creates a new Container component for each element inside sectionsArray array
        sectionsArray.map(section => 
          <Container
          id={section.id}
          categoryTitle={section.categoryTitle}
          urls={section.urls} />
          )
      }
    </main>
  )
}

export default Main;
