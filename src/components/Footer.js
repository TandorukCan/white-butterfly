import footerlogo from "../assets/Footer/WBHfooter.png";
import instagram from "../assets/Footer/instagram.png";
import facebook from "../assets/Footer/facebook.png";
import linkedin from "../assets/Footer/linkedin.png";

function Footer() {
  return (
    <footer>
      <div className="logoSection">
        <a href="/">
          <img src={footerlogo} alt="footer-logo" />
        </a>
      </div>
      <div className="footerHeader">
        <p>
          Harpenden, City and District of St Albans, county of Hertfordshire,
          England.
        </p>
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.instagram.com/whitebutterflyholistics/">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/whitebutterflyholistics">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/charmine-rajapakse-70471588">
              <img src={linkedin} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
