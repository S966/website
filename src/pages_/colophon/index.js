import Head from 'next/head'
import Header from '../../components/common/Header'
import ContacUsForm from '../../components/hireUsPage/ContactUsForm'
import Map from '../../components/common/Map'
import Newsletter from '../../components/common/Newsletter'
import Footer from '../../components/common/Footer'
import { Heading, Flex, Link,List, ListItem, ListIcon } from "@chakra-ui/core";

export default function Colophon() {
  return (
    <>
      <Head>
        <title>Colophon - Studio 966"</title>
        <meta property="og:title" content="Colophon - Studio 966" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="Colophon - Studio 966" key="title" />
      </Head>

      <Header />
      <Flex direction="column" justifyContent="center" minHeight="400px">
       <Heading as="h2" size="xl" marginBottom="40px">
         Colophon
        </Heading>
      <List styleType="disc">
        <ListItem>Made on a Mac OSX</ListItem>
        <ListItem>Coded in <Link href="http://www.vim.org/">Vim</Link> & <Link href="https://code.visualstudio.com/">VS Code</Link></ListItem>
          <ListItem>Written in <Link href="https://reactjs.org">React</Link>,<Link href="https://chakra-ui.com">Chakra UI</Link></ListItem>

        <ListItem>Fonts from <Link href="https://www.google.com/fonts">Google</Link></ListItem>
        <ListItem>Designed directly in the browser. Yes no mockups!</ListItem>
          <ListItem>Powered by <Link href="https://nextjs.org">Next JS</Link></ListItem>
        <ListItem>Hosted on <Link href="https://netlfiy.com">Netlify</Link></ListItem>
        <ListItem><Link href="https://mapbox.com">Mapbox</Link> helped us create our spanking shiny map </ListItem>
      </List>
      </Flex>
      

      <Map />
      <Newsletter />
      <Footer />
    </>
  )
}
