import React, { useState } from "react";
import "./styles/Nav.css";
import grab from "../img/grab.png";
import { Badge, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { SidebarData } from "./SidebarData";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Logo from "./../img/logo1.png";

// Dependencies
import { Link } from "react-router-dom";

function Nav({ totalItems }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="nav">
        <div className="nav__contents">
          <Link to="/">
            <img className="nav__logo" src={Logo} alt="Lonely Wrld Logo" />
          </Link>

          <div className="nav__links">
            <Link to="/" className="nav__link">
              HOME
            </Link>
            {/*<Link to="/bookstore" className="nav__link">
              BOOKS
  </Link>*/}
            <Link to="/about" className="nav__link">
              ABOUT
            </Link>
            <Link to="/contact" className="nav__link">
              CONTACT
            </Link>
          </div>

          <Link to="/cart" className="nav__cartLink">
            <IconButton
              aria-label="Show cart items"
              className="nav__cartIconButton"
            >
              <Badge
                badgeContent={totalItems}
                color="error"
                className="nav__badge"
              >
                <LocalMallIcon className="nav__cart" />
              </Badge>
            </IconButton>
          </Link>
          <Link to="#" className="nav__menu-bars">
            <MenuIcon className="nav__menu" onClick={showSidebar} />
          </Link>
        </div>
      </div>
      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <CloseIcon className="close-icon" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Nav;
