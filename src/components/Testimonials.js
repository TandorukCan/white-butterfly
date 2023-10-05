import React, { useEffect, useState } from "react";
import logo from "../assets/About/WBHtestimonials.png";

function Testimonials() {
  const slide1 = () => {
    return (
      <>
        <h1>Testimonials</h1>
        <p>
          <br /> <br />
          "I have had several sessions of Reiki with Charmine now. She has
          always made me feel at ease and in good hands.
          <br />
          <br />
          She was especially careful to explain about the procedure before our
          first session as I had not had Reiki before. Her treatment room was
          relaxing and welcoming.
          <br /> <br />
          Charmine was careful to establish rapport at the beginning of each
          session and checked how I had got on after the previous session. I was
          able to experience the emotions that the treatment produced in a safe
          environment and never felt rushed.
          <br /> <br />
          She gave calm and careful advice for how to treat myself for the time
          immediately after the treatment and for the rest of the day which I
          found particularly helpful. Any issues arising from the session were
          treated with kindness, and I am confident that my confidentiality will
          be respected."
          <br /> <br />
          <h1>Xanthe</h1>
        </p>
      </>
    );
  };
  const slide2 = () => {
    return (
      <>
        <h1>Testimonials</h1>
        <p>
          <br /> <br />
          "Charmine is a professional and gifted Reiki practitioner. She has the
          capacity to hold a space and I trusted her implicitly.
          <br />
          <br />
          Highly professional her kind client management combined with her
          professional yet friendly approach in the treatment room made each
          session feel deeply personal and safe.
          <br /> <br />
          I felt very cared for and balanced by the treatment, which coincided
          with a very difficult period of my life. These sessions grounded my
          energy and allowed me to really step into a sense of peace and find
          balance. We worked through releasing discomfort and dis-ease – and I
          always felt relaxed and safe as her presence is very nurturing .
          <br /> <br />
          Her wonderful treatments improved my mental wellbeing and stabilised
          me during an unstable time. Highly recommended."
          <br /> <br />
          <h1>A.B.</h1>
        </p>
      </>
    );
  };
  const slide3 = () => {
    return (
      <>
        <h1>Testimonials</h1>
        <p className="slide3">
          <br /> <br />
          "I hadn’t ever taken much of an interest in Reiki, nor did I have a
          great deal of knowledge about it, however when offered the opportunity
          to have some sessions with Charmine I was interested in exploring it.
          I didn’t know what to expect, but Charmine was reassuring.
          <br />
          <br />
          She clearly explained what to expect from the session, what physical
          and emotional sensations I could expect, but also that I may not feel
          anything at all. She also explained what the different hand placements
          were, checked I was comfortable and consented for her to do so. The
          treatment room had a relaxing atmosphere and I felt at ease instantly.
          <br /> <br />
          During the treatment itself, I was aware of my body reacting to the
          treatment which did surprise me. I found the treatment relaxing and
          felt grounded throughout. The sessions definitely had a positive
          impact on me; I found my stress and anxiety levels were reduced, but I
          also felt physically less tense.
          <br /> <br />
          Charmine spent a great deal of time talking through what I had
          experienced and explaining how it aligned with what she had
          experienced herself during the course of the treatment. Charmine’s
          aftercare was fantastic as well, offering advice as to how I might
          feel and what is important after reiki sessions.
          <br /> <br />
          <h1>S.M.</h1>
        </p>
      </>
    );
  };

  const slides = [slide1(), slide2(), slide3()];
  const [activeIndex, setActiveIndex] = useState(0);
  // const [autoPlay, setAutoPlay] = useState(null);
  const [currentAnimation, setCurrentAnimation] = useState({
    animation: "fadeMe 2s",
  });

  const prevClick = () => {
    setCurrentAnimation({
      display: "none",
    });
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
    console.log("prev");
  };
  const nextClick = () => {
    setCurrentAnimation({
      display: "none",
    });
    setActiveIndex((activeIndex + 1) % slides.length);
    console.log("next");
  };

  function myButton() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41">
        <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
      </svg>
    );
  }

  //   useEffect(() => {
  //     setTimeout(() => {
  //       nextClick();
  //     }, 3500);
  //   });

  useEffect(() => {
    setCurrentAnimation({
      animation: "fadeMe 2s",
    });
  }, [activeIndex]);

  return (
    <section className="testimonialsWrapper">
      <button onClick={prevClick} className="prevButton">
        {myButton()}
      </button>
      <img className="testimonialsLogo" src={logo} alt="" />
      <div style={currentAnimation} className="testimonials">
        {slides[activeIndex]}
      </div>
      <button onClick={nextClick} className="nextButton">
        {myButton()}
      </button>
    </section>
  );
}
export default Testimonials;
