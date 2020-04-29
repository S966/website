import Header from "../components/Header";
import CustomCarousel from "../components/Carousel";
import WhoAreWe from "../components/WhoAreWe";
import OurClients from "../components/OurClients";
import Map from "../components/Map";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <CustomCarousel />
      <WhoAreWe />
      <OurClients />
      <Map />
      <Newsletter />
      <Footer />
    </>
  );
}
