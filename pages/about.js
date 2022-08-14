import AboutMiddleBg from "../components/About/AboutMiddleBg";
import AlwaysWorking from "../components/About/AlwaysWorking";
import ExpertStaff from "../components/About/ExpertStaff";
import HomeOrBusiness from "../components/About/HomeOrBusiness";
import WhyChossUs from "../components/About/WhyChossUs";
import BrandsServed from "../components/Home/BrandsServed/BrandsServed";
import Testimonial from "../components/Home/Testimonial";
import AboutHEader from "./../components/About/AboutHEader";

function About() {
  return (
    <>
      <AboutHEader />
      <AlwaysWorking />
      
      <AboutMiddleBg />
      <Testimonial />
      <BrandsServed />
      <ExpertStaff />
      {/* <WhyChossUs/> */}
      <HomeOrBusiness />
    </>
  );
}
export default About;
