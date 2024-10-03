// components/AboutServices.js

import React from "react";

const AboutServices = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center  mb-4">Our Exclusive Services</h2>
      <div className="row">
        {/* Service 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Exclusive Companionship</h5>
              <p className="card-text">
                Enjoy the company of a sophisticated companion for special
                events, travel, or private gatherings, tailored to your
                preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Personalized Travel Companions</h5>
              <p className="card-text">
                Experience luxury travel with the perfect companion, enhancing
                your journey with elegance and charm.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Event Accompaniment</h5>
              <p className="card-text">
                Make a statement at social events, corporate functions, or
                high-profile gatherings with a companion who reflects your
                style.
              </p>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Private Lifestyle Consultation</h5>
              <p className="card-text">
                Offering consultations to understand your needs and preferences
                for creating a bespoke experience.
              </p>
            </div>
          </div>
        </div>

        {/* Service 5 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Discreet Social Engagements</h5>
              <p className="card-text">
                Engage in meaningful conversations and memorable moments with
                discretion and privacy as top priorities.
              </p>
            </div>
          </div>
        </div>

        {/* Service 6 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Romantic Dinner Dates</h5>
              <p className="card-text">
                Savor an evening of fine dining with an enchanting companion,
                creating a memorable experience in an elegant setting.
              </p>
            </div>
          </div>
        </div>

        {/* Add more services similarly */}
      </div>
    </div>
  );
};

export default AboutServices;
