import React from "react";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

const ContactWithUs = () => {
  const contactFormSubmit = (e) => {
    e.preventDefault();
    alert("not connected with server... will connect soon");
  };
  return (
    <section className="contact-one contact-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="contact-one__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">Contact With Us</span>
                <h2 className="section-title__title">
                  Have Questions? Feel Free to Write Us
                </h2>
              </div>
              <p className="contact-one__text">
                Lorem ipsum dolor sit amet, consectetur notted adipis not icing
                elit sed do eiusmod tempor incididunt.
              </p>
              <ul className="list-unstyled contact-one__info">
                <li>
                  <div className="icon">
                    <span className="icon-message">
                      <BiPhoneCall size={50} />
                    </span>
                  </div>
                  <div className="text">
                    <p>Call Anytime</p>
                    <a href="tel:12463330088">+ 1 - (246) 333-0088</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-phone-call">
                      <MdOutlineForwardToInbox size={50} />
                    </span>
                  </div>
                  <div className="text">
                    <p>Write Email</p>
                    <a href="mailto:needhelp@wostin.com">needhelp@wostin.com</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-placeholder">
                      <MdLocationOn size={50} />
                    </span>
                  </div>
                  <div className="text">
                    <p>Visit Us Anytime</p>
                    <span>880 Broklyn Street New York. USA</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="contact-one__right">
              <form
                onSubmit={contactFormSubmit}
                className="contact-one__form contact-form-validated"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-one__form-input-box">
                      <input type="text" placeholder="Your name" name="name" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-one__form-input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-one__form-input-box">
                      <input
                        type="text"
                        placeholder="Phone number"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-one__form-input-box">
                      <input type="text" placeholder="Subject" name="subject" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="contact-one__form-input-box text-message-box">
                      <textarea
                        name="message"
                        placeholder="Write message"
                      ></textarea>
                    </div>
                    <div className="contact-one__btn-box">
                      <button
                        type="submit"
                        className="thm-btn contact-one__btn"
                      >
                        Send a Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithUs;
