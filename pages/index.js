import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "../components/Home/slider";
import FeatureOne from "../components/Home/FeatureOne";
import LeadingManagement from "../components/Home/LeadingManagement";
import Industries from "../components/Home/Industries";
import WeDecided from "../components/Home/WeDecided";
import Counter from "../components/Home/Counter";
import Services from "../components/Home/Services";
import HaveWaste from "../components/Home/HaveWaste";
import Projects from "../components/Home/Projects";
import Testimonial from "../components/Home/Testimonial";
import LatestNews from "../components/Home/LatestNews";
import BrandsServed from "../components/Home/BrandsServed/BrandsServed";
import ServiceProvide from "../components/Home/ServiceProvide";
import Test from "../components/Test";


export default function Home() {
  return (
    <>
      <Slider/>
      <FeatureOne/>
      <LeadingManagement />
      <Industries/>
      <WeDecided/>
      <Counter/>
      {/* <Services/> */}
      <ServiceProvide/>
      <HaveWaste/>
      <Projects/>
      <BrandsServed/>
      <Testimonial/>
      {/* <Test/> */}
      {/* <LatestNews/> */}
    </>
  );
}
