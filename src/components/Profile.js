import ProfilePic from "../assets/About/profile.webp";

function Profile() {
  return (
    <section className="Profile">
      <div>
        <article className="Article1">
          <img src={ProfilePic} alt="" />
          <div>
            <h2>
              My name is <br /> Charmine Rajapakse
            </h2>
            <h5>Reiki Level 2 Practitioner – MRCGP (2010), MBChB (2005)</h5>
            <h1>Welcome to White Butterfly Holistics</h1>
            <p>
              For the past 11 years, I have been working as a GP in the NHS. My
              career has given me a unique insight into the challenges faced by
              people from all walks of life, and the growing need for more
              holistic care.
              <br />
              <br /> Treating the body is something we do on a regular basis,
              but I have always been interested in the symbiotic relationship
              between the body and the mind; I believe that one holds the key to
              the other.
              <br />
              <br />I embarked upon a journey of self-discovery when I first
              started meditating at the age of 15, during a challenging period
              of my life. As my concentration developed further, I started to
              sense energies on various levels. I subsequently went on to learn
              about chakras (energy centres) and how to achieve energetic
              balance.
            </p>
          </div>
        </article>
        <a href="/contact">
          <button>Get in touch</button>
        </a>
      </div>
      <div className="Article2">
        <p>
          My love of energy therapies led me to my first reiki treatment.
          <br /> This powerful and restorative therapy was extremely relaxing
          and peaceful. In more recent years I started deeper introspective
          work, which involved connecting in with the body to process emotions
          and negative core beliefs through free writing.
          <br />
          <br />
          Reiki complemented this process by gently surfacing the aspects that
          required processing and replenishing my system with high vibrational
          positive energy. During this time, my chronic physical ailments like
          IBS (irritable bowel syndrome) eased, the intensity of my gastritis
          decreased and I have been able to make some much needed changes to
          live a more fulfilling and authentic life.
          <br />
          <br />
          After experiencing the benefits of reiki personally, I achieved the
          level of reiki practitioner. I am deeply passionate about sharing this
          holistic therapy with those who seek balance and energy replenishment
          to promote well-being. I also hope to provide support to those
          interested in free writing, to ‘tune in to the body’ on a deeper
          level.
        </p>
        <a href="/reiki">
          <button>What is reiki?</button>
        </a>
      </div>
    </section>
  );
}

export default Profile;
