"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Pricing plans data
const plans = [
  {
    price: 1999,
    planName: "Basic Plan",
    services: [
      "Full Body Massage",
      "Deep Tissue Massage",
      "Hot Stone Massage",
      "Tissue Body Polish",
      "Foot & Nail Care",
    ],
  },
  {
    price: 2999,
    planName: "Family Plan",
    services: [
      "Full Body Massage",
      "Deep Tissue Massage",
      "Hot Stone Massage",
      "Tissue Body Polish",
      "Foot & Nail Care",
    ],
  },
  {
    price: 4999,
    planName: "VIP Plan",
    services: [
      "Full Body Massage",
      "Deep Tissue Massage",
      "Hot Stone Massage",
      "Tissue Body Polish",
      "Foot & Nail Care",
    ],
  },
];

const Packages = () => {
  return (
    <>
      <div className="text-center mx-auto my-5" style={{ maxWidth: "800px" }}>
        <p className="fs-4 text-uppercase text-primary">Our Packages</p>
        <h1 className="display-4 mb-4">Let's See Our Package</h1>
      </div>
      <div className="container-fluid pricing py-5">
        <div className="container py-5">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pricing-carousel"
          >
            {plans.map((plan, index) => (
              <SwiperSlide key={index} className="pricing-item">
                <div className="pricing-content rounded">
                  <div className="d-flex align-items-center justify-content-between bg-light rounded-top border-3 border-bottom border-primary p-4">
                    <h1 className="display-4 mb-0">
                      <small
                        className="align-top text-muted"
                        style={{ fontSize: "22px", lineHeight: "45px" }}
                      >
                        &#8377;
                      </small>
                      {plan.price}
                      <small
                        className="text-muted"
                        style={{ fontSize: "16px", lineHeight: "40px" }}
                      >
                        /Mo
                      </small>
                    </h1>
                    <h5 className="text-primary text-uppercase m-0">
                      {plan.planName}
                    </h5>
                  </div>
                  <div className="p-4">
                    {plan.services.map((service, serviceIndex) => (
                      <p key={serviceIndex}>
                        <i className="fa fa-check text-primary me-2"></i>
                        {service}
                      </p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Packages;
