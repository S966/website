import { Flex, Box, Image, Heading, Text } from "@chakra-ui/core";

function Item({ src, alt, title, body }) {
  return (
    <Flex my="8" direction="column" justify="center" align="center">
      <Image
        objectFit="cover"
        src={src}
        alt={alt}
        size="200px"
        rounded="full"
      />
      <Heading size="md" my="5">
        {title}
      </Heading>
      <Text w="300px" textAlign="center">
        {body}
      </Text>
    </Flex>
  );
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
        direction={["column", "column", "column", "row"]}
      >
        <Item
          src="/static/images/details-matter.jpg"
          alt="Canvas with prototyping."
          title="Details"
          body="We believe there’s no such thing as a ‘detail’. Each and every element
        is important, no matter how small, and we give it the attention and care
        it deserves."
        />
        <Item
          src="/static/images/robust-software.jpg"
          alt="iPhone home screen with apps."
          title="Design"
          body="We create design that crafts a fantastic user experience, where every move a user makes is intuitive, seamless, and second nature."
        />
        <Item
          src="/static/images/mobile-first.png"
          alt="iPhone on keyboard."
          title="Delivery"
          body="We deliver a top-notch end product in both performance and usability, and users are better off for it. You will be too."
        />
      </Flex>
    </Flex>
  );
}
