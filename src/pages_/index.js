import Head from 'next/head'
import Header from '../components/common/Header'
import CustomCarousel from '../components/homePage/Carousel'
import WhoAreWe from '../components/homePage/WhoAreWe'
import OurClients from '../components/homePage/OurClients'
import Map from '../components/common/Map'
import Newsletter from '../components/common/Newsletter'
import Footer from '../components/common/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="Studio 966 Web Design and Development Consultancy" content="We are a bespoke design and development consultancy with a strong attention to detail. Hire us."/>
        <title>Studio 966 | Beam Me Up, Scotty</title>
<link rel="preconnect" href="https://a.tiles.mapbox.com/v4/966.i66h5i7m/attribution,zoompan,geocoder,share.html?access_token=pk.eyJ1IjoiOTY2IiwiYSI6IlYtTlBwQ1kifQ.2KPxu2Nv_c5IPZMZj7EFcw"/>
<link rel="preconnect" href="https://a.tiles.mapbox.com/v4/966.i66h5i7m/attribution,zoompan,geocoder,share.html?access_token=pk.eyJ1IjoiOTY2IiwiYSI6IlYtTlBwQ1kifQ.2KPxu2Nv_c5IPZMZj7EFcw"/>
<link rel="preconnect" href="https://a.tiles.mapbox.com/v4/966.i66h5i7m/attribution,zoompan,geocoder,share.html?access_token=pk.eyJ1IjoiOTY2IiwiYSI6IlYtTlBwQ1kifQ.2KPxu2Nv_c5IPZMZj7EFcw"/>
        <meta property="og:title" content="Studio 966 | Beam Me Up, Scotty" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="Studio 966 | Beam Me Up, Scotty" key="title" />
      </Head>
      <Header />
      <CustomCarousel />
      <WhoAreWe />
      <OurClients />
      <Map />
      <Newsletter />
      <Footer />
    </>
  )
}
