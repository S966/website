import Header from "../../components/common/Header";
import Map from "../../components/common/Map";
import Newsletter from "../../components/common/Newsletter";
import Footer from "../../components/common/Footer";
import WorkItem from "../../components/workPage/WorkItem";

export default function Sift() {
  return (
    <>
      <Header />
      <WorkItem
        images={[
          {
            src: "/static/images/work/sift/banner-sift-1.jpg",
            alt: "Sift Logo.",
          },
          {
            src: "/static/images/work/sift/banner-sift-2.jpg",
            alt: "Sift Logo.",
          },
        ]}
        title="Have you seen this movie?"
        responsibilities={[
          "User Research",
          "User Experience",
          "User Interface Design",
          "Mobile Development",
        ]}
        body={`Sift is our own clever little app that we designed at Studio 966. If you often find yourself hearing about film or book recommendations from your friends and family but never get around to actually exploring them, this app would serve you well

        We designed it so you can keep track of all the recommendations thrown around in social interaction. You can then keep them categorized and listed, instead of having to remember them or keep multiple notes in different sources or apps. Sift will automatically gather all the information that you need about the titles on your list– reviewes, ratings, synopses etc – so you can, on your own time, decide whether you wish to keep them or discard them. You can also categorize the recommendations by their importance. The advantage of all of this is that once you’re in a bookstore or browsing through Amazon, you will have your list ready and you will know exactly what to buy or rent!

        Sift is a venture we are excited about. We have not launched or implemented it yet. We have gone far, however, in gathering the results of user testing and designing the potential interface and UX for the app.
        `}
        logo="/static/images/work/sift/sift-logo.png"
        links={[
          {
            label: "Coming soon!",
            href: "/#",
          },
        ]}
      />
      <Map />
      <Newsletter />
      <Footer />
    </>
  );
}
