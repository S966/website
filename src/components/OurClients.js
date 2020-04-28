import { Flex, Heading, Image, Link, PseudoBox } from '@chakra-ui/core'

const styles = {
  grayscale: {
    filter: 'grayscale(100%)',
    opacity: 0.6,
  },
  colored: {
    filter: 'grayscale(0%) !important',
    opacity: '1 !important',
  },
}

function Item({ src, alt, href }) {
  return (
    <Flex my="8" direction="column" justify="center" align="center">
      <PseudoBox style={styles.grayscale} _hover={styles.colored}>
        <Link href={href}>
          <Image src={src} alt={alt} />
        </Link>
      </PseudoBox>
    </Flex>
  )
}

export default function OurClients() {
  return (
    <Flex w="100%" direction="column" justify="center" align="center">
      <Heading
        as="h1"
        size="lg"
        mt="10"
        mb="5"
        mx="5"
        textTransform="uppercase"
        textAlign="center"
      >
        Our Clients
      </Heading>

      <Flex
        justify="space-around"
        w="100%"
        direction={['column', 'column', 'column', 'row']}
      >
        <Item
          href="https://hungerstation.com"
          src="/static/images/hunger-station-logo.png"
          alt="Hunger Station Logo"
        />
        <Item src="/static/images/haweee-logo.png" alt="Haweee Logo" />
        <Item
          href="https://nm.sa/ar/"
          src="/static/images/namaa-logo.png"
          alt="Namaa Logo"
        />
        <Item
          href="https://albaik.com"
          src="/static/images/albaik-logo.png"
          alt="AlBaik Logo"
        />
      </Flex>
    </Flex>
  )
}
