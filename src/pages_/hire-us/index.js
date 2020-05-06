import Head from 'next/head'
import Header from '../../components/common/Header'
import ContacUsForm from '../../components/hireUsPage/ContactUsForm'
import Map from '../../components/common/Map'
import Newsletter from '../../components/common/Newsletter'
import Footer from '../../components/common/Footer'

export default function HireUs() {
  return (
    <>
      <Head>
        <title>Hire Us - Studio 966</title>
        <meta property="og:title" content="Hire Us - Studio 966" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="Hire Us - Studio 966" key="title" />
      </Head>

      <Header />
      <ContacUsForm />
      <Map />
      <Newsletter />
      <Footer />
    </>
  )
}
