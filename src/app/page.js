import Slider from "@/components/Slider";
import Contact from "@/components/Contact";
import Packages from "@/components/Packages";
import Friendship from "@/components/Friendship";
import Map from "@/components/Map";
import AboutUs from "@/components/AboutUs";
import AboutServices from "@/components/AboutServices";

export default function Home() {
  return (
    <>
      <Slider />
      <AboutUs />
      <AboutServices />
      <Contact />
      <Packages />
      <Friendship />
      <Map />
    </>
  );
}
