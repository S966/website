import { Carousel } from 'react-responsive-carousel'
import { Flex, Box, Image, Heading } from '@chakra-ui/core'

function Item({ src, alt, text }) {
  return (
    <Box>
      <Image alt={alt} src={src} w="100%" />
      <Heading
        fontSize={['sm', 'md', '3xl']}
        textAlign="start"
        pl="5"
        py="2"
        as="h1"
        color="gray.100"
      >
        {text}
      </Heading>
    </Box>
  )
}

export default function CustomCarousel() {
  return (
    <Flex w="95%">
      <Carousel
        autoPlay
        emulateTouch
        swipeable
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={8 * 1000}
      >
        <Item
          alt="Currrva app."
          src="/static/images/banner-home-1.jpg"
          text="We just redefined your winning experience."
        />
        <Item
          alt="Albaik app."
          src="/static/images/banner-home-2.jpg"
          text="A simplified solution to get your fried chicken fix!"
        />
        <Item
          alt="Currrva app."
          src="/static/images/banner-home-3.jpg"
          text="Taking food delivery to the next level."
        />
      </Carousel>
    </Flex>
  )
}
