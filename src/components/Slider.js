"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

// Define an array of slides
const slidesData = [
  {
    id: 1,
    imgSrc: "/img/carousel-3.jpg",
    heading: "Experience Unforgettable Adventures with Make New Fantasy",
    subHeading: "Unlock New Social Experiences and Live Boldly",
    description:
      "Join a community that thrives on excitement and adventure. Make New Fantasy connects you with luxurious events, thrilling experiences, and unforgettable memories. Redefine your social life with us.",
    button1Text: "Get Start",
    button1Link: "#",
    button2Text: "Book Now",
    button2Link: "#",
  },
  {
    id: 2,
    imgSrc: "/img/carousel-2.jpg",
    heading: "Live a Life Full of Style and Sophistication",
    subHeading: "Discover Exclusive Social Opportunities",
    description:
      "Make New Fantasy helps you create a lifestyle filled with elegance and social fun. Whether you're attending high-end events or exploring new destinations, we bring sophistication to every experience.",
    button1Text: "Whatsapp",
    button1Link: "#",
    button2Text: "Book Now",
    button2Link: "#",
  },
  {
    id: 3,
    imgSrc: "/img/carousel-1.jpg",
    heading: "Create Memorable Moments with New Friends",
    subHeading: "Build Meaningful Connections and Enjoy Every Moment",
    description:
      "At Make New Fantasy, we focus on helping you connect with like-minded individuals who value fun, style, and new experiences. Embrace endless possibilities and create lasting memories.",
    button1Text: "Get Start",
    button1Link: "#",
    button2Text: "Book Now",
    button2Link: "#",
  },
  {
    id: 4,
    imgSrc: "/img/carousel-1.jpg",
    heading: "Elevate Your Social Life with Make New Fantasy",
    subHeading: "Join a Network of Elite and Fun-loving People",
    description:
      "Step into a world where luxury, fun, and adventure await. With Make New Fantasy, you can experience the ultimate lifestyle with exclusive opportunities and exciting events tailored just for you.",
    button1Text: "Get Start",
    button1Link: "#",
    button2Text: "Book Now",
    button2Link: "#",
  },
];

const sortedSlides = slidesData.sort((a, b) => a.id - b.id);

const Slider = () => {
  return (
    <div className="container-fluid  px-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {sortedSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="carousel-item active">
              <Image
                src={slide.imgSrc}
                className="img-fluid"
                alt={`Slide ${slide.id}`}
                width={800} // Add your desired width
                height={400} // Add your desired height
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-dark text-uppercase mb-3"
                    style={{ fontWeight: "600" }}
                  >
                    {slide.heading}
                  </h4>
                  {/* <h1 className="display-1 text-capitalize text-dark mb-3">
                    {slide.}
                  </h1> */}
                  <p
                    className="mx-md-5 fs-4 px-4 mb-5 text-dark"
                    style={{ fontSize: "17px!important" }}
                  >
                    {slide.description}
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn rounded-pill py-2 px-4 me-4"
                      href="https://wa.me/+917248664262"
                      style={{ backgroundColor: "green", color: "white" }}
                    >
                      <FaWhatsapp size={30} /> Whatsapp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
