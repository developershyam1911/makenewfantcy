import AboutServices from "@/components/AboutServices";
import Packages from "@/components/Packages";

export async function generateMetadata() {
  return {
    title:
      "Pricing | Make New Fantasy - Affordable Friendship Services Across India",
    description:
      "Explore the affordable pricing plans of Make New Fantasy. Join us for premium friendship services available across India at competitive rates, starting from just 999/-.",
    keywords: [
      "Make New Fantasy pricing",
      "affordable friendship services",
      "friendship club prices",
      "playboy jobs India",
      "friendship plans India",
      "social connection pricing",
      "friendship services across India",
      "low-cost friendship services",
      "premium friendship experiences",
      "India-wide friendship services",
    ],
    icons: {
      icon: "/img/favicon.png",
      shortcut: "/img/favicon.png",
      apple: "/img/favicon.png",
    },
    openGraph: {
      title:
        "Pricing | Make New Fantasy - Affordable Friendship Services Across India",
      description:
        "Explore the affordable pricing plans of Make New Fantasy. Join us for premium friendship services available across India at competitive rates, starting from just 999/-.",
      images: "/img/favicon.png",
    },
  };
}
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
