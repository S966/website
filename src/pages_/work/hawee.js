import Header from "../../components/common/Header";
import Map from "../../components/common/Map";
import Newsletter from "../../components/common/Newsletter";
import Footer from "../../components/common/Footer";
import WorkItem from "../../components/workPage/WorkItem";

export default function Hawee() {
  return (
    <>
      <Header />
      <WorkItem
        images={[
          {
            src: "/static/images/work/hawee/banner-haweee-1.jpg",
            alt: "Hawee app.",
          },
          {
            src: "/static/images/work/hawee/banner-haweee-2.jpg",
            alt: "Hawee app.",
          },
          {
            src: "/static/images/work/hawee/banner-haweee-3.jpg",
            alt: "Hawee app.",
          },
        ]}
        title="Huddle up online."
        responsibilities={[
          "User Research",
          "User Experience",
          "User Interface Design",
          "Mobile Development",
        ]}
        body={`Haweee came up with an innovative way to play soccer. Go to the app, see if local players or friends are online in your area and create a match. You decide on the time and place to meet for the game. As simple as that! The app even allows you to divide your team before the live match and manage your team formation online through the various functions that it offers.

        Studio 966 was thrilled to be a part of this project. We were in charge of putting together the UI and UX for the app. Through a scoping process, we were able to define precisely the features that the app would need and include. Then, we wireframed the app and created an interactive prototype using hi-res mockups that were streamlined through Invisionapp so the client could see a very close version of the app before development starts. We then developed it through Phonegap to ensure that it is available on all platforms.

        Now the app is being used by international players to design soccer matches around the world. With its friendly and simple interface, the app offers an inviting way to start playing soccer!`}
        logo="/static/images/work/hawee/haweee-logo.png"
        links={[
          {
            label: "Visit the Site",
            href: "http://www.haweee.com/",
          },
        ]}
      />
      <Map />
      <Newsletter />
      <Footer />
    </>
  );
}
