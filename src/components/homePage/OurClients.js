import { Flex, Heading, Link, PseudoBox } from '@chakra-ui/core'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

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
          <CloudinaryContext secure>
            <Image alt={alt} cloudName="s966" publicId={src}>
              <Transformation fetchFormat="auto" />
            </Image>
          </CloudinaryContext>
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
          src="s966/hunger-station-logo_diq8bx"
          alt="Hunger Station Logo"
        />
        <Item src="s966/haweee-logo_fbgaty.jpg" alt="Haweee Logo" />
        <Item
          href="https://nm.sa/ar/"
          src="s966/namaa-logo_vzmi45.jpg"
          alt="Namaa Logo"
        />
        <Item
          href="https://albaik.com"
          src="s966/albaik-logo_w32hpy.jpg"
          alt="AlBaik Logo"
        />
      </Flex>
    </Flex>
  )
}
