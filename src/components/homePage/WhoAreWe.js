import { Flex, Box, Image, Heading, Text } from '@chakra-ui/core'

function Item({ src, alt, title, body }) {
  return (
    <Flex my="8" direction="column" justify="center" align="center">
      <Image
        objectFit="cover"
        src={src}
        alt={alt}
        size={['150px', '200px']}
        rounded="full"
      />
      <Heading size="md" my="5">
        {title}
      </Heading>
      <Text w="300px" textAlign="center">
        {body}
      </Text>
    </Flex>
  )
}

export default function WhoAreWe() {
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
        We are an interaction design studio
      </Heading>
      <Flex
        justify="space-around"
        w="70%"
        direction={['column', 'column', 'column', 'row']}
      >
        <Item
          src="https://res.cloudinary.com/s966/image/upload/f_auto/v1589137021/s966/details-matter_oq0pun.jpg"
          alt="Canvas with prototyping."
          title="Details"
          body="We believe there’s no such thing as a ‘detail’. Each and every element
        is important, no matter how small, and we give it the attention and care
        it deserves."
        />
        <Item
          src="https://res.cloudinary.com/s966/image/upload/f_auto/ar_1:1,c_fill,g_auto,r_max,w_200/v1589137023/s966/robust-software_krafor.jpg"
          alt="iPhone home screen with apps."
          title="Design"
          body="We create design that crafts a fantastic user experience, where every move a user makes is intuitive, seamless, and second nature."
        />
        <Item
          src="https://res.cloudinary.com/s966/image/upload/f_auto/ar_1:1,c_fill,g_auto,r_max,w_200/v1589137017/s966/mobile-first_el9mmn.jpg"
          alt="iPhone on keyboard."
          title="Delivery"
          body="We deliver a top-notch end product in both performance and usability, and users are better off for it. You will be too."
        />
      </Flex>
    </Flex>
  )
}
