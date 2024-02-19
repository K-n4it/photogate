import { useState } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import './App.css';

function App() {

  const [showMainForm, setShowMainForm] = useState(false);

  // ONLY MOBILE VERSION
  // toggles display of mainForm (this function is called when the menu button is clicked)
  const toggleMainForm = () => setShowMainForm(!showMainForm);

  // ONLY MOBILE VERSION
  // hides the mainForm only if it is on the screen (this function is called when the user clicks out of the mainForm)
  const hideMainForm = () => {
    if (showMainForm) setShowMainForm(false);
  }

  return (
    <div className="App">
      <div 
      className="page-container" 
      // hides the mainForm in case the user does not click on it
      onClick={(e) => e.target.matches(".main-form-element") ? "" : hideMainForm()}>
        <Header
        toggleMainForm={toggleMainForm} />
        <Main
        showMainForm={showMainForm}
        hideMainForm={hideMainForm} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
