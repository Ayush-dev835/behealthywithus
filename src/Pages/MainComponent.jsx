import React from "react";
import Medical from "../Medical";
import Misssion from "./Misssion";
import Visionaries from "./Visionaries";
import HealthyJeenaSikhoTeam from "./HealthyJeenaSikhoTeam";
import Healthy from "./Healthy";
import Customers from "./Customers";
import Brands from "./Brands";
import Repiratory from "./Respiratory";
import USP from "./USP";
import Carousel1 from "./Carousel1";
import City from "./City";
import Mail from "./Mail";
import MedicalService from "./MedicalService";
import SeeAllService from "./SeeAllService";
import Working from "./Working";
import Portfolio from "./Portfolio";
import Article from "./Article";
import Consultation from "./Consultation";
import Spacialist from "./Specialists";
import Helping from "./Helping";

function Main() {
  

  return (
    <>
    <Helping/>
    {/* <Medical/> */}
    <Mail/>
    <MedicalService/>
    <SeeAllService/>
    <Working/>
    <Portfolio/>
    <Article/>
    
    <Spacialist/>
    {/* <Misssion/> */}
    <Visionaries/>
    <HealthyJeenaSikhoTeam/>
    <Healthy/>
    {/* <Customers/> */}
    
    <Repiratory/>
   
    <City/>

    <Carousel1/>
    <Brands/>
    <USP/>
    <Consultation/>
      
    </>
  );
}

export default Main;
