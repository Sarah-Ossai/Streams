import "./NavHeader.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import MenuIcon from "@mui/icons-material/Menu";

import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
function NavHeader() {
  const [opener, setOpener] = React.useState(false);
  return (
    <nav>
      <div className="navheader desktop">
        <div className="header_left">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
        <div className="header_right">
          <h4>Sarah Ossai</h4>

          <AccountCircleIcon src="" alt="RQ" fontSize="large" />

          <NavLink to="/login">
            <button id="btn-logout" onClick="Logout()" className="logout">
              Log Out
            </button>
          </NavLink>
        </div>
      </div>
      <div className=" mobile navheader-mobile">
         <nav className="nav-bar">
        <div className="header_left">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
          <div className="header_right">
          <h6>Sarah Ossai</h6>

          <AccountCircleIcon src="" alt="RQ" fontSize="large" />
        
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
                  <button id="btn-logout" onClick="Logout()" className="logout">
                    Log Out
                  </button>
                </NavLink>
          </Dropdown.Menu>
        </Dropdown >
        
        </div>
        </nav>
        </div>
        
    
    </nav>
  );
}
export default NavHeader;
