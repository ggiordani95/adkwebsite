import React from "react";
import { Footer } from "../Footer/Footer";
import { BannerDownNav } from "./BannerDownNav";

import { ServicesBanner } from "./ServicesBanner";
import { SpacingAdk} from "./SpacingDiv";

export function Main() {
  return (
    <>
      <video autoPlay muted loop>
        <source src="robot.mp4" type="video/mp4"></source>
      </video>
      <BannerDownNav/>
      <SpacingAdk/>
      <ServicesBanner />
      <Footer/>
        
      
      
      
      
    </>
  );
}
