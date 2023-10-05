import img1 from "../assets/Reiki/1b.webp";
import img2 from "../assets/Reiki/2.jpeg";
import img3 from "../assets/Reiki/3.jpeg";

function Reiki() {
  document.title = "Reiki | White Butterfly Holistics | Harpenden";
  return (
    <main className="reiki">
      <article>
        <h1>What is Reiki?</h1>
        <p>
          Reiki is a universal healing energy which helps to replenish and
          restore the <br /> flow of energy to bring balance and harmony to
          mind, body and emotions. <br /> It is a popular Japanese complementary
          therapy founded by Mikao Usui in the early 20th century <br /> and is
          now used in a variety of settings such as NHS hospitals, hospices,
          private clinics and spas. <br /> The National Occupational Standards
          set guidelines for professional practice. *
        </p>
        <h5>
          *Extracts from the UK Reiki Federation. Information for Clients and
          Patients. Leaflet. Aug 2021
        </h5>
      </article>
      <img className="img1" src={img1} alt="" />
      <article>
        <h2>Benefits of Reiki</h2>
        <p className="rp2">
          Reiki can reduce stress, promote relaxation and help achieve a
          peaceful sense of wellbeing. It can also <br /> support and promote
          the body’s natural self-regenerating abilities.* <br /> Reiki can be
          used alongside conventional medicine and other complimentary
          therapies.
        </p>
      </article>
      <img className="img2" src={img2} alt="" />
      <article>
        <h2>What happens during a treatment?</h2>
        <p>
          Reiki is a safe, non-invasive treatment delivered by placing the
          practitioner’s hands gently on, or hovering <br /> directly above the
          client’s body in a series of positions from head to toe. During a
          treatment the client will <br /> remain fully clothed and could be
          lying down on a treatment couch or comfortably seated.
        </p>
        <p>Some practitioners also offer Reiki as a distance treatment.</p>
        <p>
          Examples of sensations that could be felt during a treatment include
          feelings of warmth, coolness, <br /> tingling, numbness, emotional
          release and involuntary movements/twitching. It is also normal to feel{" "}
          <br />
          nothing at all. Often people feel very relaxed and may drift off to
          sleep. It is important to note that <br /> whatever you feel, or don’t
          feel has no bearing on the effectiveness of the treatment.
        </p>
        <p>
          The duration of a Reiki session can be variable, but they usually last
          around 45 minutes to 1 hour.
        </p>
        <p>
          Prior to the session, the practitioner will complete a consultation
          form <br />
          including your medical history to discuss your treatment options and
          formulate a plan.
        </p>
      </article>
      <img className="img3" src={img3} alt="" />
      <article>
        <h2>Contraindications</h2>
        <p className="rp4">
          There are no known contraindications to reiki, but it is very
          important that reiki is not used to diagnose <br /> medical conditions
          and if you are concerned about any symptoms you may be experiencing,
          please <br /> contact your GP.
        </p>
      </article>
    </main>
  );
}

export default Reiki;
