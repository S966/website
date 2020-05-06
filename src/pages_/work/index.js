import Head from 'next/head'
import Header from '../../components/common/Header'
import Headline from '../../components/workPage/Headline'
import WorkExamples from '../../components/workPage/WorkExamples'
import Newsletter from '../../components/common/Newsletter'
import Map from '../../components/common/Map'
import Footer from '../../components/common/Footer'

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - Studio 966</title>
        <meta property="og:title" content="Work - Studio 966" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="Work - Studio 966" key="title" />
      </Head>
      <Header />
      <Headline />
      <WorkExamples />
      <Map />
      <Newsletter />
      <Footer />
    </>
  )
}
