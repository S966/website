import { Carousel } from 'react-responsive-carousel'
import { Flex, Box, Heading } from '@chakra-ui/core'
import { Image, CloudinaryContext } from 'cloudinary-react'

function Item({ src, alt, text }) {
  return (
    <Box>
      <CloudinaryContext secure>
        <Image alt={alt} cloudName="s966" publicId={src} />
      </CloudinaryContext>
      <Heading
        fontSize={['sm', 'md', '4xl']}
        fontWeight="400"
        textAlign="start"
        py="2"
        ml="2"
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
        infiniteLoop
        emulateTouch
        swipeable
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={900 * 1000}
      >
        <Item
          alt="Currrva app."
          src="s966/banner-home-1_zcdtoe.jpg"
          text="We just redefined your winning experience."
        />
        <Item
          alt="Albaik app."
          src="s966/banner-home-2_gk13s0.jpg"
          text="A simplified solution to get your fried chicken fix!"
        />
        <Item
          alt="Hunger Statgion app."
          src="s966/banner-home-3_uedocm.jpg"
          text="Taking food delivery to the next level."
        />
      </Carousel>
    </Flex>
  )
}
