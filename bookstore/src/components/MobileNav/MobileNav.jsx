import { Link, NavLink } from "react-router-dom";
import styles from "./MobileNav.module.css";

const MobileNav = ({closeMenu}) => {
  return (
    <>
      <div className={styles.mobile_nav}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <button className={styles.close_btn} onClick={closeMenu}>
            <span className="material-symbols-outlined">close</span>
          </button>

          <div className={styles.menu}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            </ul>
          </div>
          <Link to="books">
            <button className={styles.btn}>
              <span>Book Shelf</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
