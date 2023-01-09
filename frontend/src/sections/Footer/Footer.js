import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
          {/* <img className="logo" src="assets/logo.jpg" alt=""/> */}
          <h4>Contact</h4>
          <p><strong>Address:</strong> 562 Weelington Road, Street 32, San Fransisco</p>
          <p><strong>Phone:</strong> +01 2222 365 / (+91) 01 2345 6789</p>
          <p><strong>Hours:</strong> 10:00 - 18:00, Mon- Sat</p>
          <div className="follow">
              <h4>Follow us</h4>
              <div className="icon">
                  <i><FaFacebookF/></i>
                  <i><FaTwitter/></i>
                  <i><FaInstagram/></i>
                  <i><FaPinterestP/></i>
                  <i><FaYoutube/></i>
              </div>
          </div>
      </div>

      <div className="col">
          <h4>About</h4>
          <a href="/">About us</a>
          <a href="/">Delivery Information</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Contact Us</a>
      </div>

      <div className="col">
          <h4>My Account</h4>
          <a href="/">Sign In</a>
          <a href="/">View Cart</a>
          <a href="/">My Wishlist</a>
          <a href="/">Track My Order</a>
          <a href="/">Help</a>
      </div>

      <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
              <img src="assets/app.jpg" alt=""/>
              <img src="assets/play.jpg" alt=""/>
          </div>
          <p>Secure Payment Gateways</p>
          <img src="assets/pay.png" alt=""/>
      </div>

      <div className="copyright">
          <p>© 2021, PHILIMON CSS HTML Ecommerce Template</p>
      </div>
    </footer>
  )
}

export default Footer