import { useState } from "react";
import "./style.scss";
// importing icons
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications, IoMdArrowDropdown } from "react-icons/io";
// react router dom 
import {Link} from "react-router-dom";
function Navbar() {
  const [isScrollerd, setIsScrolled] = useState(false);

  // on scorll navbar --> Important
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
  };
  return (
    <>
      <div className={isScrollerd ? "navbar scrolled" : "navbar"}>
        <div className="navcontainer">

          <div className="left">
            <Link to="/" className="link">
            <img

              className="navlogo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix logo"
            />
            </Link>
            <Link to="/" className="link">
            <span>Homepage</span>
            </Link>
            <Link to="/series" className="link">
            <span>Series</span>
            </Link>
            <Link to="/movies" className="link">
            <span>Movies</span>
            </Link>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <FaSearch />
            <span>KID</span>
            <IoIosNotifications />
            <span>
              <img
                className="navprofile"
                src="https://gitlab.com/uploads/-/system/project/avatar/32903236/1544x1544_circle.png"
                alt="catppuccin"
              />
            </span>
            <div className="profile">
              <IoMdArrowDropdown />
              <div className="option">
                <span>Setting</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
