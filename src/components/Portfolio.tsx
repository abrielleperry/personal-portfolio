import CardPortfolio from "./CardPortfolio";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Portfolio() {
  const projects = [
    {
      imageSrc: "placeholder.jpeg",
      imageAlt: "Project 1",
      title: "BloomHouse",
      description: "This project showcases amazing features and functionality.",
      link: "https://example.com/project1",
      linkText: "View Project",
    },
    {
      imageSrc: "placeholder.jpeg",
      imageAlt: "Project 2",
      title: "Reality Check",
      description: "A deep dive into modern UI/UX design principles.",
      link: "https://example.com/project2",
      linkText: "Read More",
    },
    {
      imageSrc: "placeholder.jpeg",
      imageAlt: "Project 3",
      title: "Project 3",
      description: "Description for Project 3.",
      link: "https://example.com/project3",
      linkText: "View Project",
    },
    {
      imageSrc: "placeholder.jpeg",
      imageAlt: "Project 1",
      title: "BloomHouse",
      description: "This project showcases amazing features and functionality.",
      link: "https://example.com/project1",
      linkText: "View Project",
    },
    {
      imageSrc: "placeholder.jpeg",
      imageAlt: "Project 2",
      title: "Reality Check",
      description: "A deep dive into modern UI/UX design principles.",
      link: "https://example.com/project2",
      linkText: "Read More",
    },
    {
      imageSrc: "placeholder.jpeg",
      imageAlt: "Project 3",
      title: "Project 3",
      description: "Description for Project 3.",
      link: "https://example.com/project3",
      linkText: "View Project",
    },
  ];

  return (
    <div className="flex flex-col bg-black text-white h-full p-[50px]">
      <div>
        <h2 className="font-publicSans text-base font-normal tracking-widest">
          RECENT WORKS
        </h2>
        <p className="font-dmSerifDisplay text-5xl leading-relaxed">
          Here are some of my favorite projects I have done. Feel free to check
          them out.
        </p>
      </div>

      <div className="flex flex-row h-auto mt-10">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"3"}
          loop={true}
          autoHeight={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <CardPortfolio {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
