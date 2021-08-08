import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import BookIcon from "@material-ui/icons/Book";
import PersonIcon from "@material-ui/icons/Person";
import HelpIcon from "@material-ui/icons/Help";
import MailIcon from "@material-ui/icons/Mail";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text"
  },
  /*{
    title: "Book Store",
    path: "/bookstore",
    icon: <BookIcon />,
    cName: "nav-text"
  },*/
  {
    title: "About",
    path: "/about",
    icon: <PersonIcon />,
    cName: "nav-text"
  },
  {
    title: "Contact JSM",
    path: "/contact",
    icon: <MailIcon />,
    cName: "nav-text"
  }
];
