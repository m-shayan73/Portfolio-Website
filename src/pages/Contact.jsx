import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import AnimatedLetters from "../components/Animations/AnimatedLetters";
import MyMap from "../components/Map/MyMap";

export default function Contact() {
  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uiradlk",
        "template_t0jzw0d",
        contactForm.current,
        "GmKL8fABye3e4lHH5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="current-page contact-page">
        <div className="w-50">
          <div className="contact-text">
            <h1>
              <AnimatedLetters word={"Contact Me"} start_delay={3} />
            </h1>
            <motion.p
              animate={{
                opacity: [0, 1],
                scale: [1.1, 1],
                rotate: [-1, 0, 1, 0],
              }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id
              dicta maiores animi, quod eum veniam dolores alias culpa quis!
            </motion.p>
          </div>

          <motion.div className="contact-form">
            <form
              ref={contactForm}
              className="contact-form"
              onSubmit={sendEmail}
            >
              <div className="contact-details">
                <input
                  id="inputName"
                  type="text"
                  name="from_name"
                  placeholder="Name"
                />
                <input
                  id="inputEmail"
                  type="email"
                  name="email_id"
                  placeholder="Email"
                />
              </div>

              <div className="contact-message">
                <input
                  id="inputSubject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
                <textarea
                  id="messageText"
                  name="message"
                  rows={5}
                  placeholder="Message"
                />
              </div>

              <button type="submit" className="flat-btn">
                Send
              </button>
            </form>
          </motion.div>
        </div>

        <div className="map">
          <MyMap />
        </div>
      </div>
    </>
  );
}