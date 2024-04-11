import Footer from "../components/Footer/Footer";
import Newsletter from "../components/NewsletterWrapper/Newsletter";
import TestimonialWrapper from "../components/Testimonial/TestimonialWrapper";
import TopSection from "../components/TopSection";
import Services from "../components/TopServices/Services";

const Home = () => {
  return (
    <>
      <TopSection />
      <main>
        <Services />
      </main>
      <main>
        <TestimonialWrapper />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
