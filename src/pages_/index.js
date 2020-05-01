import Header from "../components/common/Header";
import CustomCarousel from "../components/homePage/Carousel";
import WhoAreWe from "../components/homePage/WhoAreWe";
import OurClients from "../components/homePage/OurClients";
import Map from "../components/common/Map";
import Newsletter from "../components/common/Newsletter";
import Footer from "../components/common/Footer";

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
