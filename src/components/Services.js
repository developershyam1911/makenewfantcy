"use client";

const services = [
  {
    title: "Exclusive Membership Access",
    description:
      "Provide access to verified profiles, allowing users to connect with individuals seeking like-minded companions in a safe, private, and consensual environment.",
    imgSrc: "img/services-1.jpg",
    reverse: false,
  },
  {
    title: "Private Chat and Messaging",
    description:
      "Facilitate direct communication between users through encrypted messaging services, ensuring privacy and confidentiality for all interactions.",
    imgSrc: "img/services-2.jpg",
    reverse: true,
  },
  {
    title: "Event and Party Invitations",
    description:
      "Allow users to join exclusive events and private parties where they can meet new people in a luxurious and comfortable setting, curated specifically for the community.",
    imgSrc: "img/services-3.jpg",
    reverse: false,
  },
  {
    title: "Professional Guidance and Counseling",
    description:
      "Offer expert advice and professional counseling for users who want to navigate their relationships and personal connections with guidance from experienced professionals.",
    imgSrc: "img/services-4.jpg",
    reverse: true,
  },
  {
    title: "Discretion and Privacy Protection",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    imgSrc: "img/services-5.jpg",
    reverse: false,
  },
  {
    title: "Aroma Therapy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    imgSrc: "img/services-6.jpg",
    reverse: true,
  },
  {
    title: "Mineral Baths",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    imgSrc: "img/services-3.jpg",
    reverse: false,
  },
  {
    title: "Stone Therapy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    imgSrc: "img/services-1.jpg",
    reverse: true,
  },
];

const Services = () => {
  return (
    <div className="container-fluid services py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "800px" }}>
          <p className="fs-4 text-uppercase text-center text-primary">
            Our Service
          </p>
          <h2 className="display-3">Premium Services</h2>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-6" key={index}>
              <div
                className={`services-item bg-light border-4 rounded p-4 ${
                  service.reverse ? "border-start" : "border-end"
                } border-primary`}
              >
                <div className="row align-items-center">
                  {service.reverse ? (
                    <>
                      <div className="col-4">
                        <div className="services-img d-flex align-items-center justify-content-center rounded">
                          <Image
                            src={service.imgSrc}
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="services-content text-start">
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                          {/* <a
                            href="#"
                            className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4"
                          >
                            Make Order
                          </a> */}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-8">
                        <div className="services-content text-end">
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                          {/* <a
                            href="#"
                            className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4"
                          >
                            Make Order
                          </a> */}
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="services-img d-flex align-items-center justify-content-center rounded">
                          <Image
                            src={service.imgSrc}
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="col-12">
            <div className="services-btn text-center">
              <a
                href="#"
                className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5"
              >
                Service More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
