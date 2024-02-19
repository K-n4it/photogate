import "../styles/Header.css"

function Header({ toggleMainForm }) {
  return (
    <header className="header">
      <h1 className="header-title">
        PhotoGate
      </h1>
      <button 
      className="mobile-header-button" 
      type="button" 
      // calls the toggleMainForm function when menu button is clicked
      onClick={() => toggleMainForm()}>
        <i className="bi bi-header bi-list"></i>
      </button>
    </header>
  )
}

export default Header;
