import styles from "./Services.module.css"


const Service = (prop) => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.icon}>
                  <span className="material-symbols-outlined">{ prop.icon}</span>
        </div>
        <div className={styles.content}>
                  <h3 className={styles.title}>{ prop.title}</h3>
          <p>
            {prop.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
