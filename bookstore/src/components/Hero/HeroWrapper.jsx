import { Link } from "react-router-dom";
import styles from "./Hero.module.css"

const HeroWrapper = () => {
  return (
    <>
      <main>
        <div className={styles.hero_wrapper}>
          <div className={styles.hero_content}>
            <h1>Exceeding Glory Learning System</h1>
            <p>For all your learning needs.</p>
            <p>
              We provide a wide range of books, learning materials from
              different categories.
            </p>

            <Link>
              <div className={styles.search_bar}>
                <div className={styles.search_content}>
                  <span className="material-symbols-outlined">search</span>
                  <span className={styles.text}>Search by Book Title...</span>
                </div>
                <div className={styles.btn}>Search</div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroWrapper;
