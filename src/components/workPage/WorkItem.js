import { Link, Heading, Flex, Box, Text, Grid } from '@chakra-ui/core'
import { Carousel } from 'react-responsive-carousel'
import { TiAttachment } from 'react-icons/ti'
import { Image, CloudinaryContext } from 'cloudinary-react'

export default function WorkItem({ images, title, responsibilities, body, logo, links }) {
  return (
    <Flex my="5" w="70%" direction="column" justify="center" align="center">
      <Carousel
        autoPlay
        infiniteLoop
        emulateTouch
        swipeable
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={8 * 1000}
      >
        {images.map(({ alt, src }) => (
          <CloudinaryContext secure>
            <Image alt={alt} cloudName="s966" publicId={src} />
          </CloudinaryContext>
        ))}
      </Carousel>
      <Heading size="2xl" textAlign="center" my="8">
        {title}
      </Heading>
      <Grid templateColumns={['1fr', '1f', '1fr', '1fr 450px 1fr']} gap="5" w="100%">
        <Box>
          <Box bg="gray.50" p="4" borderWidth="1px">
            <Text mb="2" fontWeight="bold">
              Our Responsibilities:
            </Text>
            {responsibilities.map(responsibility => <Text mt="1">{responsibility}</Text>)}
          </Box>
        </Box>
        <Box>
          {body.split('\n\n').map(parahraph => (
            <Text mb="6" fontSize="lg" lineHeight="2">
              {parahraph}
            </Text>
          ))}
        </Box>
        <Flex direction="column">
          <Flex direction="column" spacing="5">
            <CloudinaryContext secure>
              <Image
                cloudName="s966"
                publicId={logo}
                alt="the client logo."
                width="150"
              />
            </CloudinaryContext>
            {links.map(({ href, label }) => (
              <Link my="6" href={href}>
                <Flex align="baseline">
                  <TiAttachment size="25" />
                  <Text ml="3">{label}</Text>
                </Flex>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Grid>
    </Flex>
  )
}
