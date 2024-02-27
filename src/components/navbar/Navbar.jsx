import "./style.scss";
// importing icons
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="left">
            <img
              className="navlogo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix logo"
            />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <FaSearch />
            <span>KID</span>
            <IoIosNotifications />
            <span>
              <img
                src="https://gitlab.com/uploads/-/system/project/avatar/32903236/1544x1544_circle.png"
                alt="catppuccin"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
