import { useState } from "react";
import style from "./Newsletter.module.css";

const Newsletter = () => {
  const [email, setEmail] = useState()

  return (
    <div className={style.newsletter_wrapper}>
      <main>
          <div className={style.newsletter_container}>
              <div className={style.content}>
                <h1>Subscribe to our newsletter</h1>
                <p>
                  Get the latest updates and articles delivered right to your inbox.
                </p>
                <div className={style.form}>
                  <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter e-mail address..." />
                  <button className={style.btn}>
                    <span className="material-symbols-outlined">mark_email_unread</span>
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
          </div>
      </main>
    </div>
  );
};

export default Newsletter;
