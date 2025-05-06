import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Button from "./Button/Button";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";

const NavBer = () => {
  const { user, userLogOut} = useContext(AuthContext);
  const logOutButton = () => {
    userLogOut()
    .then(() => {
      toast.success('Log Out Successfully',{id:'logout'})
    })
    .catch(error => {
      toast.error(error.message,{id:'logout'})
    })
  }
  const links = (
    <>
      <li>
        <NavLink
        className={({isActive})=> isActive && 'text-primary'}
        to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink
        className={({isActive})=> isActive && 'text-primary'}
        to={`/events`}>Events</NavLink>
      </li>
      <li>
        <NavLink
        className={({isActive})=> isActive && 'text-primary'}
        to={`/myprofile`}>My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">EventNest</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end space-x-4">
        {user ? (
          <div className="flex gap-4">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img
                  className='cursor-pointer'
                  referrerPolicy="no-referrer"
                  title={user?.displayName}
                  src={user?.photoURL}
                />
              </div>
            </div>
            <div>
              <Button onclick={logOutButton} level="Log Out"></Button>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <Button level="Log In"></Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBer;
