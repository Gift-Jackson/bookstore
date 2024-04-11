import styles from "./Testimonial.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

function Testimonial() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Pragma Home School Port Harcourt",
      designation: "Academic Organization",
      review:
        "It is clear that Exceeding Glory Learning System Ltd is a company that truly values its customers and strives to provide the best possible service and products. I am grateful for the exceptional experiences that I have had with your company, and I am confident that our partnership will continue to thrive in the years to come. Thank you for your dedication to excellence and for setting a high standard for other companies to follow",
    },
    {
      name: "Enaanapu Gabriel",
      designation: "Software Entrepreneur",
      review:
        "I've searched for books on strategic marketing all over to no avail. Good for me EGLS came to the rescue, bought marketing books here.",
    },
    {
      name: "The Gruen School Port Harcourt",
      designation: "Academic Organization",
      review:
        "Exceeding Glory Learning System Ltd is a customer centric, reliable and consistent organisation over the years",
    },
    {
      name: "The Priston School Oyigbo, Rivers State",
      designation: "Academic Organization",
      review:
        "The partnership for growth with Exceeding Glory Learning System Ltd has been awesome.",
    },
  ]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    buttons: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.slide_container}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className={styles.testimonial}>
              <div className={styles.text}>
                <i className="fa-solid fa-quote-left"></i>
                <p>{testimonial.review}</p>
              </div>
              <div className={styles.client}>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
