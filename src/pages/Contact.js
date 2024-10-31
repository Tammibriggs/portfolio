import React, { useEffect } from "react";
import Email from "../components/Email";
import Hero from "../components/Hero";

function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <div>
      <Hero text1="Contact" text2="Feel free to reach out to me!" />

      <div className="wrapper" style={{ maxWidth: "800px" }}>
        <h2 className="section-heading">Get in touch</h2>
        <p>
          Feel free to contact me if you want to work on a project, have a
          content proposal or just to say hi!
        </p>
        <Email />
      </div>
    </div>
  );
}

export default Contact;
