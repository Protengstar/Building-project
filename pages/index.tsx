import { useEffect, useState } from "react";
import MobileNav from "../Components/MobileNav";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Service from "@/Components/Service";
import Skils from "@/Components/Skils";
import Projects from "@/Components/Projects";
import Testimonial from "@/Components/Testimonial";
import Blog from "@/Components/Blog";
import Footer from "@/Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Nav from "@/Components/Nav";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  // Animation AOS setup
  useEffect(() => {
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />

        <div id="home">
          {/* Hero section */}
          <Hero />
        </div>

        <div className="relative z-[30]">
          <div id="about">
            {/* About section */}
            <About />
          </div>
          <div id="service">
            {/* Service section */}
            <Service />
          </div>
          {/* Skils */}
          <Skils />
          <div id="project">
            {/* Projects */}
            <Projects />
          </div>
          {/* Reviews testimonial */}
          <Testimonial />
          <div id="blog">
            {/* BLOG */}
            <Blog />
          </div>
          <div id="contact">
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
