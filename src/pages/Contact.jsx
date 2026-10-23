import Email from "../components/Email";
import Hero from "../components/Hero";
import { pageMeta } from "../utils/meta";

export const meta = () =>
  pageMeta({
    title: "Contact | Taminoturoko Briggs",
    description: "Get in touch with Taminoturoko Briggs about technical writing, docs or tutorials.",
    path: "/contact",
  });

function Contact() {
  return (
    <div>
      <Hero text1="Contact" text2="Feel free to reach out to me!" />

      <div className="wrapper">
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
