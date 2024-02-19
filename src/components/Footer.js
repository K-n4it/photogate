import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-text footer-main">K-n4it's project page - 2024</h3>
      
      <div className="footer-contact-info">
        <h3 className="footer-text">My social media and contact</h3>
        <h4 className="footer-text">
          <a 
          className="footer-link" 
          href="https://github.com/K-n4it" 
          target="_blank" 
          title="GitHub">
            <i className="bi bi-github"></i>
            github.com/K-n4it
          </a>
        </h4>
        <h4 className="footer-text">
          <a 
          className="footer-link" 
          href="https://www.linkedin.com/in/luis-tovar-3342b1228/" 
          target="_blank" 
          title="LinkedIn">
            <i className="bi bi-linkedin"></i>
            linkedin.com
          </a>
        </h4>
      </div>
    </footer>
  )
}

export default Footer;
