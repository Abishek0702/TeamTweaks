import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

function DropdownMenu() {
  return (
    <>
      <ul className="dropdown-menu dropdown-menu-end main-dropdown" >
       
        <li >
          <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className='d-flex align-items-center  text-decoration-none text-dark'>
            <div className='header-dropdown'>
              <i className={`fa-solid fa-user-graduate text-dark`} ></i>
            </div>
            <div className='mt-2 flex-grow-1' style={{ marginLeft: "12px", paddingRight: "10px" }}>
              <span className='fw-bold'>Student</span>
              <p>Login or Signup with a student</p>
            </div>
            <div className="ml-auto" style={{ marginRight: "12px" }}>
              <i className="fa-solid fa-greater-than"></i>
            </div>
          </Link>
          <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className='d-flex align-items-center  text-decoration-none text-dark'>
            <div className='header-dropdown'>
              <i className={`fa-solid fa-user-tie text-dark`} ></i>
            </div>
            <div className='mt-2 flex-grow-1' style={{ marginLeft: "12px", paddingRight: "10px" }}>
              <span className='fw-bold'>Tutor</span>
              <p>Login or Signup with a tutor</p>
            </div>
            <div className="ml-auto" style={{ marginRight: "12px" }}>
              <i className="fa-solid fa-greater-than"></i>
            </div>
          </Link>
          <Link to={"/signup"} className='d-flex align-items-center  text-decoration-none text-dark'>
            <div className='header-dropdown'>
              <i className={`fa-solid fa-users text-dark`} ></i>
            </div>
            <div className='mt-2 flex-grow-1' style={{ marginLeft: "12px", paddingRight: "10px" }}>
              <span className='fw-bold'>Parent</span>
              <p>Login or Signup with a parent</p>
            </div>
            <div className="ml-auto" style={{ marginRight: "12px" }}>
              <i className="fa-solid fa-greater-than"></i>
            </div>
          </Link>
        </li>
       
      </ul>
      <div class="modal " id="exampleModal" tabindex="-1" data-backdrop="true" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl bg-light">
          <div class="modal-content">
            <div class="modal-body">
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropdownMenu;
