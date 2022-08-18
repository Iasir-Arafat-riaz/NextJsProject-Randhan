import Link from "next/link";
import React from "react";
import careerHeaderImg from "../../public/Images/backgroundImg/banner-career.jpg";

const CareerHeader = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${careerHeaderImg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        // opacity:".5"
      }}
    >
      <div
      className="careerHeaderDiv"
        style={{
         
          
          textAlign: "justify",
          textShadow: "2px 2px black"
        }}
      >
        <h1 className="text-light pt-5 text-center">JOIN RANDHAN FAMILY</h1>
        <h5 className="text-light pt-2  " >
          RANDHAN works toward the digitalization of the future.
          As entrepreneurs, we offer services with innovation and deliver
          end-to-end solutions for our clients. To transform the businesses in
          ways the industry has never seen before, RANDHAN provides innovation and
          digitalization with Hi-technology. We believe the reason behind every
          success is our teams strength and proficiency. We are committed to the
          establishment of a sophisticated, inclusive atmosphere, where everyone
          is valued and appreciated, no matter who they are. We know that
          knowledge is continual, hence we are devoted to take part in advancing
          the future of our our purpose and values. You can learn more about 
        </h5>
      </div>
    </section>
  );
};

export default CareerHeader;
