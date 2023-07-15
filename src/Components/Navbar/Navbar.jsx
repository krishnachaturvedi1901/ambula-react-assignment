import React from "react";
import styles from "./Navbar.module.css";
import { BsCartCheck } from "react-icons/bs";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <navbar className={styles.navbarMainDiv}>
      <div className={styles.navLinkDiv} id={styles.todoShopDiv} >
        <Link to="/todos">
          <h3>Todo</h3>
        </Link>
        <Link to="/shop" >
          <h3>Shop</h3>
        </Link>
      </div>
      <div className={styles.navLinkDiv}  id={styles.homeAboutContactCartDiv} >
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/about" >
          <h3>About</h3>
        </Link>
        <Link to="/signup" >
          <h3>Signup</h3>
        </Link>
        <Link to="/cart" >
          <div>
            <BsCartCheck size={30} />
          </div>
        </Link>
      </div>
    </navbar>
    <Outlet/>
    </div>
  );
};

export default Navbar;
