import img1 from "../assets/Services/1.jpeg";
import img2 from "../assets/Services/2.jpeg";
import img3 from "../assets/Services/3b.jpeg";
import logo from "../assets/Services/logo.png";

function Services() {
  document.title = "Services | White Butterfly Holistics| Harpenden";

  return (
    <main className="services">
      <section className="services1">
        <h1>Services</h1>
        <p>I offer in-person reiki and distant healing sessions</p>
        <a href="/">
          <button>Find out more about me</button>
        </a>
      </section>
      <section className="colWrapper">
        <div className="col1">
          <h2>Discovery Call</h2>
          <p>
            A free 15 minute preliminary telephone/video <br /> consultation
            prior to the first in-person or distant <br /> healing appointment,
            to assess your needs and <br /> discuss how I may be able to help
            you.
          </p>
          <a href="/contact">
            <button>Book for free</button>
          </a>
        </div>
        <img className="img1" src={img1} alt="" />
      </section>
      <section className="services3">
        <img src={logo} alt="" />
      </section>
      <section className="colWrapper">
        <img className="img2" src={img2} alt="" />
        <div className="col2">
          <h2>Reiki session in person</h2>
          <span>
            <p>In-person treatments: £60 per session</p>
            <p>The first session will include:</p>
            <ul>
              <li>A 15-20 minute preliminary telephone/video consultation </li>
              <li>
                A 1 hour face to face appointment for the reiki treatment.
              </li>
            </ul>
            <p>
              All follow up sessions thereafter will be a 1 hour in-person
              appointment for the reiki treatment.
            </p>
          </span>
        </div>
      </section>
      <section className="services5">
        <img src={logo} alt="" />
      </section>
      <section className="colWrapper">
        <div className="col3">
          <h2>Distant Healing</h2>
          <p>
            These sessions are done as a video consultation after the initial
            consultation.
          </p>
        </div>
        <img className="img3" src={img3} alt="" />
      </section>
    </main>
  );
}

export default Services;
