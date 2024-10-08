"use client";

import AboutServices from "@/components/AboutServices";
import Contact from "@/components/Contact";

export async function generateMetadata() {
  return {
    title:
      "Our Services | Make New Fantasy - Friendship & Social Experiences Across India",
    description:
      "Discover the range of services offered by Make New Fantasy, including friendship club memberships, social engagement experiences, and exclusive playboy jobs. Our services are available across India, designed to enhance your social life.",
    keywords: [
      "Make New Fantasy services",
      "friendship services India",
      "playboy jobs",
      "friendship club memberships",
      "social connections",
      "friendship experiences",
      "social engagement",
      "lifestyle enhancement",
      "India-wide friendship services",
      "unique social experiences",
    ],
    icons: {
      icon: "/img/favicon.png",
      shortcut: "/img/favicon.png",
      apple: "/img/favicon.png",
    },
    openGraph: {
      title:
        "Our Services | Make New Fantasy - Friendship & Social Experiences Across India",
      description:
        "Discover the range of services offered by Make New Fantasy, including friendship club memberships, social engagement experiences, and exclusive playboy jobs. Our services are available across India, designed to enhance your social life.",
      images: "/img/favicon.png",
    },
  };
}

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
