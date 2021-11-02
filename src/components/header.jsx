import {Logo} from "../assets/icons";
import "../assets/style.css";
function Header() {
    return (
      <div className="header">
        <div className="header-in">
          <div className="header-left">
            <div className="logo"><Logo/><b>embedsocial</b></div>
          </div>
          <div className="header-links">
            <a href="#">Platforms</a>
            <a href="#">Widgets</a>
            <a href="#">Templates</a>
            <a href="#">Pricing</a>
          </div>
          <div className="header-buttons">
            <button className="header-button-light">Login</button>
            <button className="header-button-regular">Start Free Trial</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  