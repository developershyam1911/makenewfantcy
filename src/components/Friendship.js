"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// Team data array
const teamMembers = [
  {
    name: "Oliva Mia",
    role: "Spa & Beauty Expert",
    image: "/img/team-1.png",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Charlotte Ross",
    role: "Spa & Beauty Expert",
    image: "/img/team-2.png",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Amelia Luna",
    role: "Spa & Beauty Expert",
    image: "/img/team-3.png",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Isabella Evelyn",
    role: "Spa & Beauty Expert",
    image: "/img/team-4.png",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

const Friendship = () => {
  return (
    <div className="container-fluid team pt-5">
      <div className="container pt-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "800px" }}>
          <p className="fs-4 text-uppercase text-primary">Specialist</p>
          <h1 className="display-4 mb-4">Top Friendship Specialist</h1>
        </div>
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className=""
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="team-item">
              <div className="team-img rounded-top">
                <Image
                  src={member.image}
                  className="img-fluid w-100 rounded-top bg-light"
                  alt={member.name}
                  height={400}
                  width={250}
                />
              </div>
              <div className="team-text rounded-bottom text-center p-4">
                <h3 className="text-white">{member.name}</h3>
                <p className="mb-0 text-white">{member.role}</p>
              </div>
              <div className="team-social d-flex justify-content-center">
                <a
                  className="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2 mx-1"
                  href={member.socials.twitter}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2 mx-1"
                  href={member.socials.facebook}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2 mx-1"
                  href={member.socials.linkedin}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 btn-square rounded-circle mx-1"
                  href={member.socials.instagram}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Friendship;
