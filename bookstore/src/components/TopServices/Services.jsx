import Service from "./Service";
import styles from "./Services.module.css";

const Services = (prop) => {
  return (
    <>
      <section className={styles.services}>
        <h2>
          What we offer<span className={styles.mark}>...</span>
        </h2>
        <div className={styles.grid}>
          <Service
            icon="school"
            title="Teacher Training"
            content="Basic computer skills on Microsoft Packages, computer appreciation and desktop publishing.
"
          />
          <Service
            icon="menu_book"
            title="Book Sales and distribution"
            content="We also ensure the learning needs of individuals, academic institutions are met in the most efficient way possible.
            "
          />
          <Service
            icon="accessibility_new"
            title="Consultancy"
            content="Our learning System also offers School owners consulting services to help develop strategies to ensure success in running.
          "
          />
        </div>
      </section>
    </>
  );
};

export default Services;
