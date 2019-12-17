import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAirbnb,
  faFacebook,
  faInstagram,
  faTripadvisor
  
} from "@fortawesome/free-brands-svg-icons";



export default function SocialFollow() {
  return (
    <span >
    <div className="social-container">
     <a href="https://www.instagram.com/exploretimisoara/" className="instagram social" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

     <a href="https://www.facebook.com/TimisoaraOrasEuropean"className="facebook social"  target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
     </a>

     <a href="https://www.airbnb.com" className="airbnb social" target="_blank">
        <FontAwesomeIcon icon={faAirbnb} size="2x" />
     </a>

	 <a href="https://www.tripadvisor.com" className="tripadvisor social" target="_blank">
        <FontAwesomeIcon icon={faTripadvisor} size="2x" />
     </a>
    </div>
  </span>
  );
}
