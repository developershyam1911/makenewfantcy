import React from "react";

const AboutServices = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center  mb-4">Our Elite Services</h2>
      <div className="row">
        {/* Service 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Exclusive Friendship Companionship</h5>
              <p className="card-text">
                Engage in meaningful connections with charming companions,
                designed to make your moments more joyful, relaxing, and
                memorable.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Playboy Services</h5>
              <p className="card-text">
                Enjoy the company of refined and well-mannered men, offering a
                variety of experiences to meet your needs, from casual outings
                to intimate engagements.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Travel Companions</h5>
              <p className="card-text">
                Enhance your travels with an engaging companion who will make
                your journeys more enjoyable and memorable, whether for business
                or leisure.
              </p>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Event Companionship</h5>
              <p className="card-text">
                Attend high-profile events or social gatherings with the perfect
                companion, making sure you stand out while enjoying great
                company.
              </p>
            </div>
          </div>
        </div>

        {/* Service 5 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Discreet & Private Interactions</h5>
              <p className="card-text">
                Engage in personal, discreet interactions that prioritize your
                privacy and provide the companionship you desire.
              </p>
            </div>
          </div>
        </div>

        {/* Service 6 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 text-dark">
            <div className="card-body">
              <h5 className="card-title">Exclusive Dinner Dates</h5>
              <p className="card-text">
                Enjoy a luxurious dinner with a sophisticated companion,
                creating a perfect evening filled with great conversation and
                elegant surroundings.
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
