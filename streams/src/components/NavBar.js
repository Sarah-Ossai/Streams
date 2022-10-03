import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Dropdown from "react-bootstrap/Dropdown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
const NavBar = () => {
  const [opener, setOpener] = React.useState(false);
  return (
    <nav>
      <div className="navbar desktop">
        <ul>
          <Link to="#about" smooth>
            <li>About</li>
          </Link>
          <a href="https://wa.me/+2347013969864">
            <li>Support</li>
          </a>
          <Link to="#faq" smooth>
            <li>FAQ</li>
          </Link>
          <hr className="header-line" />
          <NavLink to="/signup">
            {" "}
            <li>Sign up</li>
          </NavLink>
        </ul>
        <NavLink to="/login">
          <button id="login-btn">Login</button>
        </NavLink>
      </div>
      {/* Mobile view */}
      <div className="navbar nav-mobile">
        <Dropdown>
          <Dropdown.Toggle variant="purple" id="dropdown-basic">
            <IconButton
              aria-label={opener ? "open" : "close"}
              onClick={() => setOpener(!opener)}
            >
              {opener ? <CloseIcon className='menu-icon'/> : <MenuIcon className='menu-icon'/>}
            </IconButton>
          </Dropdown.Toggle>

          <Dropdown.Menu className='dropdown-style'>
            <Dropdown.Item className='item-style'>
              <NavLink
                to="/homepage"
                className="linking  mobile linking-mobile move"
              >
                Home
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className='item-style'>
              <NavLink
                to="trending"
                className="linking mobile linking-mobile move"
              >
                Trending
              </NavLink>
            </Dropdown.Item >
            <Dropdown.Item className='item-style'>
              <NavLink
                to="artists"
                className="linking mobile linking-mobile move"
              >
                Artists
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className='item-style'>
              <NavLink
                to="genre"
                className="linking mobile linking-mobile move"
              >
                Genre
              </NavLink>
            </Dropdown.Item>
            <hr className="line2 mobile" />

            <Dropdown.Item className='item-style'>
              <NavLink
                to="myplaylist"
                className="linking mobile linking-mobile"
              >
                My Playlist
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className='item-style'>
              <NavLink to="favorite" className="linking mobile linking-mobile">
                Favorite
              </NavLink>
            </Dropdown.Item>

            <Dropdown.Item className='item-style'>
              <NavLink to="/signup" className="linking mobile linking-mobile">
                {" "}
                Sign up
              </NavLink>
            </Dropdown.Item>
            <br/>
            <NavLink to="/login">
              <button id="login-btn-mobile" >Login</button>
            </NavLink>
          </Dropdown.Menu>
        </Dropdown >
      </div>
    </nav>
  );
};

export default NavBar;
