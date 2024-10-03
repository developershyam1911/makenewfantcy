"use client";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const [cities] = useState([
    "Ahmedabad",
    "Bangalore",
    "Chennai",
    "Delhi",
    "Hyderabad",
    "Mumbai",
    "Kolkata",
    "Pune",
    "Chandigarh",
    "Shimla",
    "Goa",
    "Ludhiana",
    "Ambala",
    "Sonipat",
    "Panipat",
    "Kurukshetra",
    "Amritsar",
    "Dehradun",
    "Indore",
    "Jaipur",
    "Kanpur",
    "Guwahati",
    "Udaipur",
    "Vadodara",
  ]);
  const cityChunks = chunkArray(cities, 8);
  return (
    <>
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* Newsletter Section */}
            <div className="col-xl-3">
              <h4 className="mb-4 text-white">Follow Us</h4>
              {["Facebook", "Instagram", "Twitter"].map((platform, idx) => (
                <a href="#" key={idx}>
                  <i className="fas fa-angle-right me-2" /> {platform}
                </a>
              ))}
              <h4 className="my-4 text-white">Contact Us</h4>
              <p className="mb-0">
                <i className="fas fa-envelope text-secondary me-2" /> Kapasheda
                border, 110037
              </p>
              <p className="mb-0">
                <i className="fas fa-envelope text-secondary me-2" />{" "}
                ankic1073@gmail.com
              </p>
              <p className="mb-0">
                <i className="fas fa-phone text-secondary me-2" /> +91 072486
                64262
              </p>
            </div>
            {/* Metro City Section */}
            {cityChunks.map((chunk, index) => (
              <div className="col-md-6 col-lg-6 col-xl-3" key={index}>
                <div className="footer-item d-flex flex-column">
                  <h4 className="mb-4 text-white">Metro Cities</h4>
                  {chunk.map((city, idx) => (
                    <a href="#" key={idx}>
                      <FaAngleRight size={22} /> {city}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            {/* Services Section */}
            {/* <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="footer-item d-flex flex-column">
                <h4 class="mb-4 text-white">Metro City</h4>
                <a href="">
                  {" "}
                  <FaAngleRight size={22} /> Facials
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Waxing
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Message
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Minarel baths
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Body treatments
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Aroma Therapy
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Stone Spa
                </a>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="footer-item d-flex flex-column">
                <h4 class="mb-4 text-white">Metro City</h4>
                <a href="">
                  {" "}
                  <FaAngleRight size={22} /> Facials
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Waxing
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Message
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Minarel baths
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Body treatments
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Aroma Therapy
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Stone Spa
                </a>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="footer-item d-flex flex-column">
                <h4 class="mb-4 text-white">Metro City</h4>
                <a href="">
                  {" "}
                  <FaAngleRight size={22} /> Facials
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Waxing
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Message
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Minarel baths
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Body treatments
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Aroma Therapy
                </a>
                <a href="">
                  <FaAngleRight size={22} /> Stone Spa
                </a>
              </div>
            </div> */}
            {/* Schedule Section */}
            {/* <div className="col-xl-3">
              <h4 className="mb-4 text-white">Schedule</h4>
              <p className="text-muted">
                Monday: <span className="text-white">09:00 am – 10:00 pm</span>
              </p>
              <p className="text-muted">
                Saturday:{" "}
                <span className="text-white">09:00 am – 08:00 pm</span>
              </p>
              <p className="text-muted">
                Sunday: <span className="text-white">09:00 am – 05:00 pm</span>
              </p>
              <h4 className="my-4 text-white">Address</h4>
              <p className="mb-0">
                <i className="fas fa-map-marker-alt text-secondary me-2" /> 123
                Ranking Street, North Tower, New York, USA
              </p>
            </div> */}

            {/* Contact Section */}
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-4 text-center text-md-start">
              <span className="text-light">
                <FaRegCopyright className="me-2" />
                <a href="#">Your Site Name</a>, All rights reserved.
              </span>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                (Icon, idx) => (
                  <a
                    href="#"
                    key={idx}
                    className="btn btn-light btn-sm-square rounded-circle me-2"
                  >
                    <Icon size={24} />
                  </a>
                )
              )}
            </div>
            <div className="col-md-4 text-center text-md-end text-white">
              Designed By{" "}
              <a className="border-bottom" href="https://devshyamtech.in">
                Shyam Mishra
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
