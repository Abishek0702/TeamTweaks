import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './dropdown-menu';
import './css/common.css';

function Navbar() {
    const [collapseOpen, setCollapseOpen] = useState(false);

    const toggleNavbar = () => {
        setCollapseOpen(!collapseOpen);
    };

    const closeNavbar = () => {
        setCollapseOpen(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg border border-bottom border-0 py-1">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img src="screen14.png" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse  justify-content-end ${collapseOpen ? 'show' : ''}`} style={{ marginRight: "4%" }} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="#">Find Tutors</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="#">Support</Link>
                            </li>
                            <li className="nav-item dropdown px-3">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Learn
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ marginTop: "20px" }}>
                                    <li><Link className="dropdown-item" to="#">Course</Link></li>
                                    <li><Link className="dropdown-item" to="#">Intern</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="#">Apply for Tutor</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="#"><i className="fa-solid fa-globe me-2"></i>EN</Link>
                            </li>
                            <li className="nav-item dropdown px-3">
                                <button className="btn btn-dark " to="#" id="navbarDropdownLogin" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login & SignUp
                                </button>
                                <DropdownMenu  />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
        </>
    );
}

export default Navbar;
