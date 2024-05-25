import React from "react";
import {
  MapPin,
  PhoneCall,
  Envelope,
  FacebookLogo,
  TwitterLogo,
  PinterestLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="details">
        <h3>Book Your Travel LLC</h3>
        <div className="more-details">
          <h5>
            <MapPin size={20} weight="fill" className="icon" /> 1400
            Pennsylvania Ave. Washington, DC
          </h5>
          <h5>
            <PhoneCall size={20} weight="fill" className="icon" />{" "}
            1-555-555-5555
          </h5>
          <h5>
            <Envelope size={20} weight="fill" className="icon" />{" "}
            info@bookyourtravel.com
          </h5>
        </div>
      </div>
      <div className="useful-link">
        <h3>Useful Links</h3>
        <div className="useful-links">
          <ul>
            <li>
              <Link to="/Activities" className="Link" > Activities </Link>
            </li>
            <li>
              <Link to="/Breakfast" className="Link" >Breakfast</Link>
            </li>
            <li>
              <Link to="/Contact" className="Link" >Contact</Link>
            </li>
            <li>
              <Link to="/Rooms" className="Link" >Rooms</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="social">
        <h3>Follow Us</h3>
        <div className="social-links">
          <ul>
            <li>
              <FacebookLogo size={38} weight="fill" className="icon" />
            </li>
            <li>
              <TwitterLogo size={38} weight="fill" className="icon" />
            </li>
            <li>
              <PinterestLogo size={38} weight="fill" className="icon" />
            </li>
            <li>
              <InstagramLogo size={38} weight="fill" className="icon" />
            </li>
            <li>
              <YoutubeLogo size={38} weight="fill" className="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
