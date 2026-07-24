import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:rajatgautam0190@gmail.com" data-cursor="disable">
                rajatgautam0190@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919355460811" data-cursor="disable">
                +91 9355460811
              </a>
            </p>
            <h4>Location</h4>
            <p>South Delhi Hari Nagar</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Rajat0190"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noreferrer"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rajat-gautam-b71838284/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noreferrer"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rajat Gautam</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
