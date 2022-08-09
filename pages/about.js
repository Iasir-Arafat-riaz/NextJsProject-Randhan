import ExpertStaff from "../components/About/ExpertStaff";
import HomeOrBusiness from "../components/About/HomeOrBusiness";
import WhyChossUs from "../components/About/WhyChossUs";
import BrandsServed from "../components/Home/BrandsServed/BrandsServed";
import Testimonial from "../components/Home/Testimonial";


function About() {
  return (
    <>
    <BrandsServed/>
      <Testimonial />
      <ExpertStaff/>
      {/* <WhyChossUs/> */}
      <HomeOrBusiness/>
    </>
  );
}
export default About;