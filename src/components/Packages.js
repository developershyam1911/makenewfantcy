"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Pricing plans data
const plans = [
  {
    price: 1999,
    planName: "Standard",
    services: [
      " 10 Clients in a Month",
      "Earning Upto 15-20k/Client",
      "Service at Your Nearest Location as per your convenience",
      // "Tissue Body Polish",
      // "Foot & Nail Care",
    ],
  },
  {
    price: 2999,
    planName: "Silver",
    services: [
      " 20 Clients in a Month",
      "Earning Upto 15-20k/Client",
      "Service at Your Nearest Location as per your convenience (Hotel)",
      "Invition for Grand events on every alternate month organized by company",
      // "Foot & Nail Care",
    ],
  },
  {
    price: 4999,
    planName: "Golden",
    services: [
      "15 Local+10 NRI Clients/Month",
      "Earning Upto 25-30k/Client",
      "Service at anywhere in india as per your convenience (Hotel)",
      "Invition for Grand events organized by company on every alternative month",
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
          <div className="row">
            {plans.map((plan, index) => (
              <div className="pricing-item mb-3 col-md-4">
                <div className="pricing-content rounded">
                  <div className="d-flex align-items-center justify-content-between bg-light rounded-top border-3 border-bottom border-primary p-4">
                    <h1 className="display-4 mb-0">
                      <small
                        className="align-top text-muted"
                        style={{ fontSize: "18px", lineHeight: "40px" }}
                      >
                        &#8377;
                      </small>
                      {plan.price}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
