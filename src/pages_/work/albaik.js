import Header from "../../components/common/Header";
import Map from "../../components/common/Map";
import Newsletter from "../../components/common/Newsletter";
import Footer from "../../components/common/Footer";
import WorkItem from "../../components/workPage/WorkItem";

export default function Albaik() {
  return (
    <>
      <Header />
      <WorkItem
        images={[
          {
            src: "s966/work/albaik/banner-albaik-3_tv6bl3.jpg",
            alt: "Albaik Pickup order app screenshot.",
          },
          {
            src: "s966/work/albaik/banner-albaik-2_wdolcm.jpg",
            alt: "Albaik Pickup order app screenshot.",
          },
          {
            src: "s966/work/albaik/banner-albaik-1_ro5iek.jpg",
            alt: "Albaik Pickup order app screenshot.",
          },
        ]}
        title="A simplified solution to get your fried chicken fix!"
        responsibilities={[
          "User Research",
          "User Experience",
          "User Interface Design",
          "Product Management",
        ]}
        body={`AlBaik is Saudi’s beloved fried chicken franchise and we loved working with them. With customers clamoring for fried chicken meals in abundance, we decided to help AlBaik to fine tune their ordering-online interface.

        AlBaik, being one of Saudi’s corporate social responsibility sweethearts, currently has wide reach and because of this, our work with them required extensive UI and UX research. We formulated several models to enhance one particular aspect of the ordering process: adding to the basket. This step is crucial as it set the speed of ordering and, hence, the speed of delivery. Because everyone wants their baik ASAP!

        We first looked at the customer profiles to understand their needs throughout the ordering process, then, through an iterative process of testing, programming, and designing, we were able to come up with a final solution for a web application that offers a quick and smooth experience that both AlBaik and Studio966 are proud of.`}
        logo="s966/work/albaik/albaik-logo_cqq5ux.png"
        links={[
          {
            label: "Visit the Site",
            href: "http://orderonline.albaik.com/",
          },
        ]}
      />
      <Map />
      <Newsletter />
      <Footer />
    </>
  );
}
