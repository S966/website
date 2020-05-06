import Head from 'next/head'
import HeroImage from '../../components/servicesPage/HeroImage'
import Header from '../../components/common/Header'
import ServicesBody from '../../components/servicesPage/PageBody'
import Map from '../../components/common/Map'
import Newsletter from '../../components/common/Newsletter'
import Footer from '../../components/common/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Studio 966</title>
        <meta property="og:title" content="Services - Studio 966" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="Services - Studio 966" key="title" />
      </Head>

      <Header />
      <HeroImage />
      <ServicesBody />
      <Map />
      <Newsletter />
      <Footer />
    </>
  )
}
