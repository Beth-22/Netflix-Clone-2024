import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

/*
const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_links">
        <ul>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Account</li>
          <li>Media Center</li>
        </ul>
        <ul>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Ways to Watch</li>
          <li>Terms of Use</li>
        </ul>
        <ul>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Speed Test</li>
          <li>Legal Notices</li>
          <li>Only on Netflix</li>
        </ul>
      </div>
      <p className="footer_note">© {new Date().getFullYear()} Netflix Clone</p>
    </footer>
  );
};

export default Footer;
*/

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Uses</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy-write">&copy; 1997-2004 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
