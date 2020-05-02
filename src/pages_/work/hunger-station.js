import Header from "../../components/common/Header";
import Map from "../../components/common/Map";
import Newsletter from "../../components/common/Newsletter";
import Footer from "../../components/common/Footer";
import WorkItem from "../../components/workPage/WorkItem";

export default function HungerStationWork() {
  return (
    <>
      <Header />
      <WorkItem
        images={[
          {
            src:
              "/static/images/work/hunger-station/banner-hunger-station-1.jpg",
            alt: "Hunger station app.",
          },
          {
            src:
              "/static/images/work/hunger-station/banner-hunger-station-2.jpg",
            alt: "Hunger station app.",
          },
        ]}
        title="Taking food delivery to the next level."
        responsibilities={[
          "User Research",
          "User Experience",
          "User Interface Design",
          "Content Architecture",
        ]}
        body={`Hunger station is a trendy food delivery app that is popular with the users in Saudi Arabia and the Gulf region. An app among many, this one is far from run-of-the-mill in that it contains an easy fluid design that appeals to the eyes and to the need for quick functionality.

        We were happy to work with the app team to further develop the various glitches in the app’s UX and UI. For example, we found, through usability studies that customers are often frustrated with the inconsistency of location names, This, among other things, was remedied by our team in order to create a more fluid UX (see full report ). We also constructed a whole new design persona for the app’s copy so that the app would have the leverage of a distinct character.

        Finally, we helped the Hunger Station team to upgrade their visual interface. With some careful design, we were able to create a unique set of screens that all speak one language and have one visual voice without straying too far from the brand’s original visual scheme and its integrity.`}
        logo="/static/images/work/hunger-station/hunger-station-logo.png"
        links={[
          {
            label: "Android app",
            href:
              "https://itunes.apple.com/us/app/hungerstation/id596011949?mt=8",
          },
          {
            label: "iOS App",
            href:
              "https://play.google.com/store/apps/details?id=com.hungerstation.android.web&hl=en",
          },
        ]}
      />
      <Map />
      <Newsletter />
      <Footer />
    </>
  );
}
