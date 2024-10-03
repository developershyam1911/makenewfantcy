"use client";

import AboutServices from "@/components/AboutServices";
import Packages from "@/components/Packages";

const page = () => {
  return (
    <>
      <div className="container-fluid bg-breadcrumb py-5">
        <div className="container text-center py-5">
          <h3 className="text-white display-3 mb-4">Price List</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Prices</li>
          </ol>
        </div>
      </div>
      <Packages />
      <AboutServices />
    </>
  );
};

export default page;
