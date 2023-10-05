import WBH from "../assets/Header/WBH.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <a href="/">
        <img className="App-logo" src={WBH} alt="" />
      </a>
      <nav>
        <ul className="Navbar">
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/reiki">
            <li>Reiki</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
