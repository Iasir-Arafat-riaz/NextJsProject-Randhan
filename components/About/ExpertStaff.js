import Image from "next/image";
import React from "react";
import staffShape from "../../styles/images/shapes/team-one-shape.png";
import staff1 from "../../styles/images/team/team-1-1.jpg";
import staff2 from "../../styles/images/team/team-1-2.jpg";
import staff3 from "../../styles/images/team/team-1-3.jpg";

const ExpertStaff = () => {
  return (
    <section className="team-one">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Team Behind Success</span>
          <h2 className="section-title__title">Expert Staff & Members</h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="100ms"
          >
            {/* Team One Single */}
            <div className="team-one__sngle">
              <div className="team-one__img">
                <Image src={staff1} alt="" />
                <div className="team-one__shape">
                  <Image src={staffShape} alt="img" />
                </div>
              </div>
              <div className="team-one__content">
                <p className="team-one__title">Accountant</p>
                <h3 className="team-one__name">Kevin Martin</h3>
                <div className="team-one__social-box">
                  <div className="team-one__social">
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div className="team-one__arrow">
                    <a href="staff-details.html">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="200ms"
          >
            {/* Team One Single */}
            <div className="team-one__sngle">
              <div className="team-one__img">
                <Image src={staff2} alt="" />
                <div className="team-one__shape">
                  <Image src={staffShape} alt="img" />
                </div>
              </div>
              <div className="team-one__content">
                <p className="team-one__title">Co Founder</p>
                <h3 className="team-one__name">Jessica Brow</h3>
                <div className="team-one__social-box">
                  <div className="team-one__social">
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div className="team-one__arrow">
                    <a href="staff-details.html">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="300ms"
          >
            {/* Team One Single */}
            <div className="team-one__sngle">
              <div className="team-one__img">
                <Image src={staff3} alt="" />
                <div className="team-one__shape">
                  <Image src={staffShape} alt="img" />
                </div>
              </div>
              <div className="team-one__content">
                <p className="team-one__title">Senior Assistant</p>
                <h3 className="team-one__name">David Cooper</h3>
                <div className="team-one__social-box">
                  <div className="team-one__social">
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div className="team-one__arrow">
                    <a href="staff-details.html">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertStaff;
