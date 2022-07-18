import React, { useState } from "react";
import '../NavBar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom";
import icon from "../img/logo-light.png";
import avatar from "../img/avatar.jpg"

const NavBar = ({brand}) => {
  // const [nav, setNav] = useState(false); //set state in order to flip hamburger icon

  // // initialize array of links with ids
  // const links = [
  //   {
  //     id: 1,
  //     link: "home",
  //     to: "/",
  //     Link: "Link",
  //   },
  //   {
  //     id: 2,
  //     link: "contact",
  //     to: "/Contact" ,
  //     Link: "Link",
  //   },
  // ];
  
  return (
    <div
    //this brings navbar to top , above the other components
      className=" z-index-1"
    >
      <nav
      class="navbar navbar-expand-lg navbar-expand navbar-dark bg-black fixed-top shadow-lg"
    >
      <div className="container container-fluid">
        <div className="row container-fluid px-0 d-flex flex-row ">
          <div className="col-md-4 col-sm-2 pt-sm-1 pb-md-1 d-flex flex-col align-content-center justify-content-start">
            <a className=" navbar-brand my-1 mx-4 d-flex align-items-center justify-content-start " href="index.html">
              <img className="w-25 w-sm-50" src={icon}/> TaskAura
            </a>
          </div>
          <div className="col-md-4 col-sm-4 mr-5 pr-5"></div>
          <div className="col-md-4 col-sm-4 ml-1 px-5 mx-100 pt-lg-100 pt-sm-1 pt-md-100 pl-5 pb-sm-2 mb-sm-3 mt-md-4 mt-lg-5 mb-lg-5 mt-sm-3">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="dropdown"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
            <div className="mr-auto"></div>

            <ul className="navbar-nav d-flex flex-row justify-content-between align-items-end mx-5 p-1">
              <li className="  container nav-item active d-flex flex-row align-items-center justify-content-end " 
              src="">
                <button className=" btn rounded-circle btn-outline-light px-2 ">
                <img className="avatar border rounded-circle  mr-1 pr-1 img-responsive" src={avatar}/ >
                 
                </button>
                <p className=" d-none d-sm-block  px-3  pt-3 text-light">
                  Hi Jason!
                </p>
              </li>
              
            </ul>
          </div>
        </div>
        </div>
      </div>
    </nav>
    </div>
  );
}; 

export default NavBar;