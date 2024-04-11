import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import MobileNav from "../MobileNav/MobileNav";
import { useState } from "react";

const Header = ({closeMenu}) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <div>
      <header className={styles.nav_bar}>
        <a href="/">
          <div className={styles.brand}>
            <img src={Logo} alt="Logo" />
            <h2>EGLS</h2>
          </div>
        </a>

        <div className={styles.actions}>
          <nav>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
            </ul>
          </nav>

          <div className={styles.right}>
            <div className={styles.cart}>
              <span className={styles.indicator}></span>
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>

            <Link to="/books">
              <button>Go to Shelf</button>
            </Link>

            <div className={styles.toggle_menu} onClick={toggleMenu}>
              <span className="material-symbols-outlined">menu</span>
            </div>
          </div>
        </div>
        {showMenu && <MobileNav closeMenu={toggleMenu } />}
      </header>
    </div>
  );
};

export default Header;
