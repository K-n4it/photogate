import "../styles/Searcher.css";

function Searcher({ searchTerm, requestPhotos, showMainForm }) {

  // gets the text typed in the search bar
  const getText = (event) => {
    const text = event.target.value;
    searchTerm = text.trim();
  }

  return (
    <form 
    id="main-form" 
    // displays the mainForm only if it has main-form-active as class name (only mobile)
    className={`main-form main-form-element ${showMainForm ? "main-form-active" : ""}`}>
      <div className="main-form-search-section main-form-element">
        <input 
        className="main-form-text main-form-element" 
        type="text"
        placeholder="Search.."
        // calls the getText function any time the text in the search bar changes
        onChange={(event) => getText(event)} />
        <button 
        className="main-form-submit main-form-submit-search main-form-element" 
        type="submit" 
        // calls the requestPhotos function when search button is clicked (updates the main section container)
        onClick={(event) => requestPhotos(event, searchTerm, true)}>
          <i className="bi bi-searcher bi-search main-form-element"></i>
        </button>

        {/* this submit button only works on mobile */}
        
        <button 
        className="main-form-submit MOBILE-main-form-submit-add main-form-element" 
        type="submit" 
        // calls the requestPhotos function when add section button is clicked (updates the secondary sections container)
        onClick={(event) => requestPhotos(event, searchTerm, false)}>
          <i className="bi bi-searcher bi-plus-square-fill main-form-element"></i>
        </button>

      </div>

      {/* this submit button only works on desktop */}

      <button 
      className="main-form-submit main-form-submit-add mobile-hidden-element" 
      type="submit" 
      // calls the requestPhotos function when add section button is clicked (updates the secondary sections container)
      onClick={(event) => requestPhotos(event, searchTerm, false)}>
        <i className="bi bi-searcher bi-plus-square-fill"></i>
      </button>
    </form>
  )
}

export default Searcher;
