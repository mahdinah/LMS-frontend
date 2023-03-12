import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css';
import profile from '../Images/image.png'

export default function Sidebar() {

    useEffect(() => {
        const showMenu = (headerToggle, navbarId) => {
            const toggleBtn = document.getElementById(headerToggle),
                nav = document.getElementById(navbarId)
            if (headerToggle && navbarId) {
                toggleBtn.addEventListener('click', () => {
                    nav.classList.toggle('show-menu')
                    toggleBtn.classList.toggle('bx-x')
                })
            }
        }
        showMenu('header-toggle', 'navbar')
        const linkColor = document.querySelectorAll('.nav__link')
        function colorLink() {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
        linkColor.forEach(l => l.addEventListener('click', colorLink))
    });

    const name = 'Admin';

    return (
        <div>
            <header className="header">
                <div className="header__container">
                    <img src={profile} alt="" className="header__img" />
                    <a href="#" className="header__logo"></a>
                    <div className="header__search">
                        Welcome {name}
                    </div>
                    <div className="header__toggle">
                        <i className='bx bx-menu' id="header-toggle"></i>
                    </div>
                </div>
            </header>

            <div className="nav" id="navbar">
                <nav className="nav__container">

                    <div>
                        <a className="nav__link nav__logo">
                            <i className='bx bx-menu nav__icon' ></i>
                            <span className="nav__logo-name">Menu</span>
                        </a>
                        <div className="nav__list">
                            <div className="nav__items">
                                <h3 className="nav__subtitle">menu</h3>
                                <Link to="/admin/panel" className="nav__link active">
                                    <i className='bx bx-home nav__icon sizeicon3' ></i>
                                    <span className="nav__name">Home</span>
                                </Link>
                                <Link to="/profile" className="nav__link active">
                                    <i className='bx bi-gear nav__icon' ></i>
                                    <span className="nav__name">Profile</span>
                                </Link>
                                <Link to="/admin/list" className="nav__link">
                                    <i className='bx bx-user nav__icon' ></i>
                                    <span className="nav__name">Admin</span>
                                </Link>
                                <Link to="/student/list" className="nav__link">
                                    <i class="bx bi-book nav__icon sizeicon"></i>
                                    <span className="nav__name">Student</span>
                                </Link>
                                <Link to="/classroom/list" className="nav__link">
                                    <i className='bx bx-book-alt nav__icon'></i>
                                    <span className="nav__name">Classroom</span>
                                </Link>
                                <Link to="/section/list" className="nav__link">
                                    <i className='bx bx-id-card nav__icon sizeicon3'></i>
                                    <span className="nav__name">Section</span>
                                </Link>
                                <Link to="/attendance/panel" className="nav__link">
                                    <i class="bx bi-calendar-check nav__icon sizeicon2"></i>
                                    <span className="nav__name">Attedance</span>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <a href="../" className="nav__link nav__logout">
                        <i className='bx bx-log-out bx-tada nav__icon'></i>
                        <span className="nav__name">Log Out</span>
                    </a>

                </nav>
            </div>
        </div>
    );
}