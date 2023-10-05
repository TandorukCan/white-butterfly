import logo from "../assets/Services/logo.png";
import formImg from "../assets/Contact/1.jpeg";
import Iframe from "react-iframe";
import instagram from "../assets/Footer/instagram.png";
import facebook from "../assets/Footer/facebook.png";
import linkedin from "../assets/Footer/linkedin.png";
import Form from "./Form.js";

function Contact() {
  document.title = "Contact | White Butterfly Holistics | Harpenden";

  return (
    <main className="contactSection">
      <section className="contact1">
        <h1>Contact me</h1>
        <p>To book a reiki treatment please contact me directly</p>
        <a href="/services">
          <button>Read more about the sessions</button>
        </a>
      </section>
      <section className="formWrapper">
        <img src={formImg} alt="" />
        <div className="contactForm">
          <div className="formTop">
            <p>White Butterfly Holistics</p>
            <p>
              <a
                href="mailto:charmine.rajapakse@gmail.com?subject=Get%20in%20touch%20for%20a%20distant%20or%20in%20person%20healing%20session."
                target="_self"
                class="wixui-rich-text__text"
              >
                charmine.rajapakse@gmail.com
              </a>
              &nbsp;|&nbsp;
              <span>07821176942</span>
            </p>
          </div>
          <Form />
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
        </div>
      </section>
      <section className="contact2">
        <img src={logo} alt="" />
      </section>
      <section className="contact3">
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19736.45848836189!2d-0.35226470409630045!3d51.805113421540284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487638f8354a93ed%3A0x9a94a56d61b31e25!2sThe%20Southdown%20Clinic%20-%20Medical%20%26%20Complementary%20Clinic!5e0!3m2!1sen!2suk!4v1695719133897!5m2!1sen!2suk"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></Iframe>
      </section>
    </main>
  );
}

export default Contact;
