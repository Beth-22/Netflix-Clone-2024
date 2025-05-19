import React, { useEffect, useState } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/images/netflix-logo.png";
import Avatar from "../../assets/images/avatar.webp"; // Replace with your user icon

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header_outer_container ${isScrolled ? "nav_black" : ""}`}
    >
      <div className="header_container">
        <div className="header_left">
          <img src={NetflixLogo} alt="Netflix" className="logo" />
          <ul className="nav_menu">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <SearchIcon className="icon" />
          <NotificationsIcon className="icon" />
          <img src={Avatar} alt="User" className="avatar" />
          <ArrowDropDownIcon className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
