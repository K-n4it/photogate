import "../styles/Photo.css";

function Photo({ url, id }) {

  // opens a new tab with the photo URL
  const openPhoto = (url) => {
    const newTab = window.open(url, "_blank");
    newTab.focus();
  }

  return (
    <img
    className="photo"
    src={url}
    alt="unavaliable"
    id={id}
    // calls the openPhoto function when the photo is clicked
    onClick={() => openPhoto(url)} />
  )
}

export default Photo;
