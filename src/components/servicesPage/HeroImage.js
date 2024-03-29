import { Carousel } from 'react-responsive-carousel'
import { Flex, Box, Heading } from '@chakra-ui/core'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

function Item({ src, alt, text }) {
  return (
    <Box>
      <CloudinaryContext secure>
        <Image alt={alt} cloudName="s966" publicId={src}>
          <Transformation fetchFormat="auto" />
        </Image>
      </CloudinaryContext>
      <Heading size="md" textAlign="start" pl="5" py="2" as="h1" color="gray.100">
        {text}
      </Heading>
    </Box>
  )
}

export default function HeroImage() {
  return (
    <Flex mt="5" px="40px">
      <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
        <Item
          alt="a wall filled with sticky notes about brainstorming ideas."
          src="s966/966-about-us-header_dh9haj.jpg"
          text="We solve problems - by design."
        />
      </Carousel>
    </Flex>
  )
}
