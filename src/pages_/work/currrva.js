import Header from "../../components/common/Header";
import Map from "../../components/common/Map";
import Newsletter from "../../components/common/Newsletter";
import Footer from "../../components/common/Footer";
import WorkItem from "../../components/workPage/WorkItem";

export default function Currrva() {
  return (
    <>
      <Header />
      <WorkItem
        images={[
          {
            src: "/static/images/work/currrva/banner-currrva-1.jpg",
            alt: "Currrva Logo.",
          },
          {
            src: "/static/images/work/currrva/banner-currrva-2.jpg",
            alt: "Currrva Logo.",
          },
        ]}
        title="We just redefined your winning experience."
        responsibilities={[
          "User Research",
          "User Experience",
          "User Interface Design",
          "Product Management",
          "Growth",
        ]}
        body={`This is another in-house app that we created. We love playing video games. More importantly, we love to win. Currrva is a platform designed to help you keep your scores when competing with your friends. When a player wins, he or she raises a claim and the claim must be approved by the opponent. The app can then record this claim and use it, along with others in the tally, to create some interesting graphs and diagrams about both players’ progress in the game.

        The name Currrva comes from the Italian word curva, which is the curved hotspot for fans in a soccer stadium on either ends of the playing field. Currrva, as an MVP, currently supports soccer as a flagship game. We will then expand it to accommodate various sports games, such as the Madden franchise, NBA 2k franchise, NHL franchise and then possibly some fighting games, and casual racing games.

        We have gone far into development for this app and we will be ready to launch for beta soon.`}
        logo="/static/images/work/currrva/currrva-logo.png"
        links={[
          {
            label: "Visit the Site",
            href: "http://www.currrva.com/",
          },
        ]}
      />
      <Map />
      <Newsletter />
      <Footer />
    </>
  );
}
