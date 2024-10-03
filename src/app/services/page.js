"use client";

import AboutServices from "@/components/AboutServices";
import Contact from "@/components/Contact";

const page = () => {
  return (
    <>
      <div className="container-fluid bg-breadcrumb py-5">
        <div className="container text-center py-5">
          <h3 className="text-white display-3 mb-4">Services</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Services</li>
          </ol>
        </div>
      </div>
      <AboutServices />
      <Contact />
      {/* <Services /> */}
    </>
  );
};

export default page;
