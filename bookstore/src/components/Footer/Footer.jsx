import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <main>
        <div className={style.footer_content}>
          <ul>
            <li>
            <i className="fa-solid fa-location-dot fa-bounce"></i>
              &nbsp; <span>Shop 6 & 9 , Henry Plaza , off rumuewhara new road , off
              Eneka RD port Harcourt.</span>
            </li>
            <li>
                          <i className="fa-solid fa-phone-volume fa-shake"></i>
                          &nbsp;
                <span><a href="tel:+2348137411338">+234-813-7411-338</a></span>
            </li>
            <li>
                          <i className="fa-solid fa-envelope fa-beat"></i>
                          &nbsp;
                <span><a href="mailto:exceedingglory@gmail.com">
                  exceedingglory@gmail.com
                </a></span>
            </li>
          </ul>
          <p>Copyright &copy; 2024 Exceeding Glory. All rights reserved.</p>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
