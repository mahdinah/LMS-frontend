import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import profile from "../Images/image.png";
import mail from "../Images/mailmsg.png";
import dashboard from "../Images/dashboard.png";
import calender from "../Images/calender.png";
import notification from "../Images/notification.png";
import "react-big-calendar/lib/css/react-big-calendar.css";


const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};
const date = new Date().toLocaleString("en-US", options);

export default function Sidebar() {
  const name = "Mahdi";
  const role = "Administrator";

  return (
    <div>
      <header className="header">
        <div className="header__search">
          <form>
            <input
              type="text"
              placeholder="Search..."
              className="header__searchInput"
            />
   <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
          </form>
        </div>
        
        <div className="header__container">
          <div className="header-ico">
            <img src={mail} alt="" className="icos" />
            <img src={calender} alt="" className="icos" />
            <img src={notification} alt="" className="icos" />
          </div>
          <a href="/admin/panel">
          <img src={dashboard} alt="" className="icosdash" />
</a>
          <div className="header__dateTime">{date}</div>
        </div>
      </header>

      <div className="nav" id="navbar">
        <nav className="nav__container">
        <a href="/profile">
          <img src={profile} alt="" className="header__img" />
          <div className="adminweclome">Welcome {name} {role}</div></a>
          <div>
            <div className="nav__list">
              <div className="nav__items">
                <h3 className="nav__subtitle">menu</h3>
                <Link to="/admin/panel" className="nav__link">
                  <i className="bx bx-home nav__icon sizeicon3"></i>
                  <span className="nav__name">Home</span>
                </Link>
                <Link to="/profile" className="nav__link">
                  <i className="bx bi-gear nav__icon"></i>
                  <span className="nav__name">Profile</span>
                </Link>
                <Link to="/admin/list" className="nav__link">
                  <i className="bx bx-user nav__icon"></i>
                  <span className="nav__name">Admin</span>
                </Link>
                <Link to="/student/list" className="nav__link">
                  <i class="bx bi-book nav__icon sizeicon"></i>
                  <span className="nav__name">Student</span>
                </Link>
                <Link to="/classroom/list" className="nav__link">
                  <i className="bx bx-book-alt nav__icon"></i>
                  <span className="nav__name">Classroom</span>
                </Link>
                <Link to="/section/list" className="nav__link">
                  <i className="bx bx-id-card nav__icon sizeicon3"></i>
                  <span className="nav__name">Section</span>
                </Link>
                <Link to="/attendance/panel" className="nav__link">
                  <i class="bx bi-calendar-check nav__icon sizeicon2"></i>
                  <span className="nav__name">Attedance</span>
                </Link>
              </div>
            </div>
          </div>

          <a href="../Login" className="nav__link nav__logout">
            <i className="bx bx-log-out bx-tada nav__icon"></i>
            <span className="nav__name">Log Out</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
