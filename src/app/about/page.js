import AboutServices from "@/components/AboutServices";
import AboutUs from "@/components/AboutUs";
import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "About Us | Make New Fantasy - Friendship & Social Connections",
    description:
      "Learn more about Make New Fantasy, the leading platform for building friendships and creating exciting social connections. Discover how we enhance your social life with unique friendship experiences.",
    keywords: [
      "About Make New Fantasy",
      "friendship club",
      "social connections",
      "playboy jobs",
      "friendship services",
      "social engagement",
      "lifestyle enhancement",
      "unique friendship experiences",
      "about friendship platform",
      "build social connections",
    ],
    icons: {
      icon: "/img/favicon.png",
      shortcut: "/img/favicon.png",
      apple: "/img/favicon.png",
    },
    openGraph: {
      title: "About Us | Make New Fantasy - Friendship & Social Connections",
      description:
        "Learn more about Make New Fantasy, the leading platform for building friendships and creating exciting social connections. Discover how we enhance your social life with unique friendship experiences.",
      images: "/img/favicon.png",
    },
  };
}

const page = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div className="container-fluid bg-breadcrumb py-5">
        <div className="container text-center py-5">
          <h3 className="text-white display-3 mb-4">About Us</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">About Us</li>
          </ol>
        </div>
      </div>
      <AboutUs />
      <AboutServices />
      {/* About Us Section */}
      {/* <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="video position-relative">
                <Image
                  src="/img/about-1.jpg"
                  width={500}
                  height={400}
                  className="img-fluid rounded"
                  alt="About Us"
                />
                <div
                  className="position-absolute border-white"
                  style={{ bottom: 0, right: 0 }}
                >
                  <Image
                    src="/img/about-2.jpg"
                    width={200}
                    height={200}
                    className="img-fluid rounded"
                    alt="About Us"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>
            </div>
            <div className="col-lg-7">
              <p className="fs-4 text-uppercase text-primary">About Us</p>
              <h1 className="display-4 mb-4">
                Your Best Spa, Beauty & Skin Care Center
              </h1>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="row g-4">
                <div className="col-md-6 d-flex align-items-center">
                  <i className="fab fa-gitkraken fa-3x text-primary"></i>
                  <div className="ms-4">
                    <h5 className="mb-2">Special Offers</h5>
                    <p className="mb-0">Lorem Ipsum is simply dummy text.</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <i className="fas fa-gift fa-3x text-primary"></i>
                  <div className="ms-4">
                    <h5 className="mb-2">Special Gifts</h5>
                    <p className="mb-0">Lorem Ipsum is simply dummy text.</p>
                  </div>
                </div>
              </div>

              <p className="my-4">
                Lorem Ipsum is simply dummy text of the printing industry.
              </p>
              <a href="#" className="btn btn-primary rounded-pill py-3 px-5">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default page;
