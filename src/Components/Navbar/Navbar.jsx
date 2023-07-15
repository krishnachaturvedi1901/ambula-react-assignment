import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { MdDragHandle } from "react-icons/md";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { WindowWidthContext } from "../../Context/WindowWidthContext";

const Navbar = () => {
  const { windowWidth } = useContext(WindowWidthContext);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      {windowWidth > 700 ? (
        <navbar className={styles.navbarMainDiv}>
          <div className={styles.navLinkDiv} id={styles.todoShopDiv}>
            <Link to="/todos">
              <h3>Todo</h3>
            </Link>
            <Link to="/shop">
              <h3>Shop</h3>
            </Link>
          </div>
          <div
            className={styles.navLinkDiv}
            id={styles.homeAboutContactCartDiv}
          >
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <Link to="/about">
              <h3>About</h3>
            </Link>
            <Link to="/signup">
              <h3>Signup</h3>
            </Link>
            <Link to="/cart">
              <div>
                <BsCartCheck size={30} />
              </div>
            </Link>
          </div>
        </navbar>
      ) : (
        <div className={styles.navbarMobileMainDiv}>
          <div
            className={styles.dropdownIconDiv}
            onClick={() => setDropdown(!dropdown)}
          >
            <MdDragHandle size={25} />
          </div>
          <Link to="/">
            <div>
              <AiOutlineHome size={25} />
            </div>
          </Link>
          <Link to="/cart">
            <div>
              <BsCartCheck size={25} />
            </div>
          </Link>
          {dropdown ? (
            <div className={styles.dropdownDiv}>
              <Link to="/todos">
                <h3>Todo</h3>
              </Link>
              <Link to="/shop">
                <h3>Shop</h3>
              </Link>
              <Link to="/about">
                <h3>About</h3>
              </Link>
              <Link to="/signup">
                <h3>Signup</h3>
              </Link>
              <Link to="/cart">
                <h3>Cart</h3>
              </Link>
            </div>
          ) : null}
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Navbar;
