import { Carousel } from "react-responsive-carousel";
import { Flex, Box, Image, Heading } from "@chakra-ui/core";

function Item({ src, alt, text }) {
  return (
    <Box>
      <Image objectFit="cover" alt={alt} src={src} w="100%" />
      <Heading
        size="md"
        textAlign="start"
        pl="5"
        py="2"
        as="h1"
        color="gray.100"
      >
        {text}
      </Heading>
    </Box>
  );
}

export default function HeroImage() {
  return (
    <Flex mt="5" w="95%">
      <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
        <Item
          alt="a wall filled with sticky notes about brainstorming ideas."
          src="/static/images/966-about-us-header.jpg"
          text="We solve problems - by design."
        />
      </Carousel>
    </Flex>
  );
}
