import React from "react";

const Projects = () => {
  return (
    <div id="project" className="bg-[#02050a] pt-[6rem] md:pt-[6rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">ject</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div data-aos="fade-up">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <img src="/images/p1.jpg" alt="portfolio" className="object-contain" />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <img src="/images/p2.jpg" alt="portfolio" className="object-contain" />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <img src="/images/p3.jpg" alt="portfolio" className="object-contain" />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <img src="/images/p4.jpg" alt="portfolio" className="object-contain" />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <img src="/images/p5.jpg" alt="portfolio" className="object-contain" />
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <img src="/images/p2.jpg" alt="portfolio" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
