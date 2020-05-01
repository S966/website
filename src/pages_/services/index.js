import HeroImage from "../../components/servicesPage/HeroImage";
import Header from "../../components/common/Header";
import ServicesBody from "../../components/servicesPage/PageBody";
import Map from "../../components/common/Map";
import Newsletter from "../../components/common/Newsletter";
import Footer from "../../components/common/Footer";

export default function Services() {
  return (
    <>
      <Header />
      <HeroImage />
      <ServicesBody />
      <Map />
      <Newsletter />
      <Footer />
    </>
  );
}
