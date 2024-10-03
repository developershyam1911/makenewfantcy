"use client";
import React, { useState, useRef, useEffect } from "react";
import init from "@/firebase";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Contact = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobno: "",
    message: "",
    date: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobno, message, date } = formData;
    if (
      name !== "" &&
      email !== "" &&
      mobno !== "" &&
      message !== "" &&
      date !== ""
    ) {
      try {
        await setDoc(doc(init.db, "enquiry", uuidv4()), {
          name,
          email,
          mobno,
          message,
          date,
          createdAt: serverTimestamp(),
        });
        setFormData({
          name: "",
          email: "",
          mobno: "",
          message: "",
          date: "",
        });
        toast.success("Your enquiry send successfully.");
      } catch (err) {
        console.log("Error" + err);
      }
    } else {
      toast.error("Please fill all the mandetary field");
    }
  };

  return (
    <div className="container-fluid appointment py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="appointment-form p-5">
              <p className="fs-4 text-uppercase text-primary">Get In Touch</p>
              <h1 className="display-4 mb-4 text-white">Get Appointment</h1>
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gx-4">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control py-3 border-white bg-transparent text-white"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control py-3 border-white bg-transparent text-white"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="tel"
                      name="mobno"
                      value={formData.mobno}
                      onChange={handleChange}
                      className="form-control py-3 border-white bg-transparent text-white"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="form-control py-3 border-white bg-transparent"
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control border-white bg-transparent text-white"
                      placeholder="Write Comments"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-primary-outline-0 w-100 py-3 px-5"
                    >
                      SUBMIT NOW
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Add the opening hours section back if needed */}
        </div>
      </div>

      {/* Counter Section */}
      <div className="container-fluid counter-section">
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="counter-item p-5">
                <div className="counter-content bg-white p-4">
                  <i className="fas fa-globe fa-5x text-primary mb-3"></i>
                  <h5 className="text-primary">Monthly Clients</h5>
                  <div className="svg-img">
                    <svg width="100" height="50">
                      <polygon
                        points="55, 10 85, 55 25, 55 25,"
                        style={{ fill: "#DCCAF2" }}
                      />
                    </svg>
                  </div>
                </div>
                <div className="counter-quantity">
                  <span className="text-white fs-2 fw-bold">25</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="counter-item p-5">
                <div className="counter-content bg-white p-4">
                  <i className="fas fa-globe fa-5x text-primary mb-3"></i>
                  <h5 className="text-primary">Worldwide Clients</h5>
                  <div className="svg-img">
                    <svg width="100" height="50">
                      <polygon
                        points="55, 10 85, 55 25, 55 25,"
                        style={{ fill: "#DCCAF2" }}
                      />
                    </svg>
                  </div>
                </div>
                <div className="counter-quantity">
                  <span className="text-white fs-2 fw-bold">50</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="counter-item p-5">
                <div className="counter-content bg-white p-4">
                  <i className="fas fa-globe fa-5x text-primary mb-3"></i>
                  <h5 className="text-primary">Happy Clients</h5>
                  <div className="svg-img">
                    <svg width="100" height="50">
                      <polygon
                        points="55, 10 85, 55 25, 55 25,"
                        style={{ fill: "#DCCAF2" }}
                      />
                    </svg>
                  </div>
                </div>
                <div className="counter-quantity">
                  <span className="text-white fs-2 fw-bold">32</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
              </div>
            </div>
            {/* Other counter items... */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
