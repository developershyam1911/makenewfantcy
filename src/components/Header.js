"use client";

import Image from "next/image"; // Import for optimized image handling
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container-fluid sticky-top px-0">
      {/* <div className="container-fluid topbar d-none d-lg-block">
        <div className="container px-0">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex flex-wrap">
                <Link href="#" className="me-4 text-light">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>{" "}
                  Kapasheda border, 110037
                </Link>
                <Link href="#" className="me-4 text-light">
                  <i className="fas fa-phone-alt text-primary me-2"></i>+91
                  072486 64262
                </Link>
                <Link href="#" className="text-light">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  ankic1073@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center justify-content-end">
                <Link
                  href="#"
                  className="me-3 btn-square border rounded-circle nav-fill"
                >
                  <FaFacebook size={20} />
                </Link>
                <Link
                  href="#"
                  className="me-3 btn-square border rounded-circle nav-fill"
                >
                  <FaTwitter size={20} />
                </Link>
                <Link
                  href="#"
                  className="me-3 btn-square border rounded-circle nav-fill"
                >
                  <FaInstagram size={20} />
                </Link>
                <Link
                  href="#"
                  className="btn-square border rounded-circle nav-fill"
                >
                  <FaLinkedin size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid bg-light">
        <div className="container px-0">
          <nav className="navbar navbar-light navbar-expand-xl">
            <Link
              href="/"
              className="navbar-brand"
              onClick={() => setToggle(false)}
            >
              {/* Use Image component for better performance in Next.js */}
              <Image
                src="/img/logo.png" // Make sure this path is correct in your public folder
                alt="Logo"
                height={90}
                width={90}
              />
              {/* <h1 className="text-primary display-4">Sparlex</h1> */}
            </Link>
            <button
              className="navbar-toggler py-2 px-3 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              onClick={() => setToggle(!toggle)}
            >
              <MdOutlineMenu size={25} className=" text-primary" />
              {/* <span className="fa fa-bars text-primary"></span> */}
            </button>
            <div
              className={`collapse navbar-collapse bg-light py-3 ${
                toggle ? "show" : ""
              }`}
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto border-top">
                <Link
                  href="/"
                  className="nav-item nav-link active"
                  onClick={() => setToggle(!toggle)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="nav-item nav-link"
                  onClick={() => setToggle(!toggle)}
                >
                  About
                </Link>

                <Link
                  href="/services"
                  className="nav-item nav-link"
                  onClick={() => setToggle(!toggle)}
                >
                  Services
                </Link>
                <Link
                  href="/price"
                  className="nav-item nav-link"
                  onClick={() => setToggle(!toggle)}
                >
                  Price
                </Link>
                {/* <Link href="/blog" className="nav-item nav-link">
                  Blog
                </Link> */}
              </div>
              <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                <Link
                  href="tel:+917248664262"
                  className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4 ms-4"
                  onClick={() => setToggle(!toggle)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
