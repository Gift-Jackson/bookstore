import Testimonial from "./Testimonial";
import styles from "./Testimonial.module.css";

const TestimonialWrapper = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Testimonials</h1>
        <p>
          What Our Clients Say<span className={styles.mark}>...</span>
        </p>
      </div>

      <div>
        <Testimonial />
      </div>
    </section>
  );
};

export default TestimonialWrapper;
