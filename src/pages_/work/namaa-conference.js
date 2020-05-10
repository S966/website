import Header from "../../components/common/Header";
import Map from "../../components/common/Map";
import Newsletter from "../../components/common/Newsletter";
import Footer from "../../components/common/Footer";
import WorkItem from "../../components/workPage/WorkItem";

export default function NamaaConference() {
  return (
    <>
      <Header />
      <WorkItem
        images={[
          {
            src: "s966/work/namaa/banner-namaa-1_mgj8zw.jpg",
            alt: "Namaa Almunawara Logo.",
          },
        ]}
        title="Business opportunities with the click of a button."
        responsibilities={[
          "User Research",
          "User Experience",
          "User Interface Design",
          "Website Development",
        ]}
        body={`Namaa is a semi-governmental agency that launched the Almunawara Entrepreneurship Conference this November. It was a great endeavor that aimed to boost local businesses in Al-Madinah Al-Munawara. By training and supporting young entrepreneurs in the area, a healthy collective of goods and services thrive together and, by doing so, push the economy further into optimum growth.

        As a benefactor of small businesses, Namaa takes meticulous care to propel those businesses by offering not only training and financial support but also packaging options and an official seal of approval. Products are even offered together to local buyers and tourists in booths and shops, hosted by Namaa for wider reach.

        Studio 966 had a hand in helping the event to be actualized. With a large group of applicants participating in the conference and in the entrepreneurship program, we took the digitizing of the event’s website into our own hands. To manage an event of this magnitude, we set up the entire online system. We even designed the online application process for both the conference and for the large number of young entrepreneurs to submit their business projects for review and evaluation.`}
        logo="s966/work/namaa/namaa-logo_urbih8.png"
        links={[
          {
            label: "Visit the Site",
            href: "http://mec.nm.sa/",
          },
        ]}
      />
      <Map />
      <Newsletter />
      <Footer />
    </>
  );
}
