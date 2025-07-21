import { Navigation } from "@/components/Navigation";
import Hero from "@/components/Hero";
import InteractiveMenu from "@/components/InteractiveMenu";
import { About } from "@/components/About";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <section id="menu">
        <InteractiveMenu />
      </section>
      <section id="about">
        <About />
      </section>
      <ReviewsCarousel />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
