import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Contact Info */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sanskardevidas@gmail.com" data-cursor="disable">
                sanskardevidas@gmail.com
              </a>
            </p>

            <h4>Education</h4>
            <p>B.Tech Computer Science</p>

            <h4>Location</h4>
            <p>Pune, Maharashtra, India</p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/sanskardevidas"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

            <a
            href="https://www.linkedin.com/in/sanskar-dherange-83b8b6317/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/sanskar_devidas_/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          {/* Footer Credit */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sanskar Dherange</span>
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