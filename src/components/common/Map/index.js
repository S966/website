import { Flex, Box, Image, Heading, Link, Text } from '@chakra-ui/core'
import style from './styles.module.scss'

function Item({ title, body, email, twitter, address_1, address_2 }) {
  return (
    <Flex
      className={style['wrapper']}
      border="1px"
      borderColor="gray.200"
      p={10}
      direction="column"
      justify="start"
      align="start"
      position="absolute"
      right="5%"
      left="5%"
      bg="white"
    >
      <Heading
        marginBottom=".5rem"
        lineHeight="1.4"
        fontFamily="PT Sans, sans-serif"
        fontSize="2.3125rem"
      >
        {title}
      </Heading>
      <Text marginBottom="1.25rem" textAlign="start">
        {body}
      </Text>
      <Text textAlign="start">
        Inquiries:{' '}
        <Link href={`mailto:${email}`} color="#2ba6cb">
          {email}
        </Link>
      </Text>
      <Text marginBottom="1.25rem" textAlign="start">
        Twitter:{' '}
        <Link href={`https://twitter.com/${twitter}`} color="#2ba6cb">
          {twitter}
        </Link>
      </Text>
      <Text textAlign="start">{address_1}</Text>
      <Text textAlign="start">{address_2}</Text>
    </Flex>
  )
}

export default function Map() {
  return (
    <Flex w="100%" direction="column" justify="center" align="end">
      <Item
        title="Contact Us"
        body="We love to hear from our clients and customers."
        email="hello@966.io"
        twitter="@studio966"
        address_1="2nd floor, Murjana Building #206 "
        address_2="Prince Sultan Street, Jeddah, Saudi Arabia "
      />

      <iframe
        width="100%"
        height="500px"
        frameBorder="0"
        src="https://a.tiles.mapbox.com/v4/966.i66h5i7m/attribution,zoompan,geocoder,share.html?access_token=pk.eyJ1IjoiOTY2IiwiYSI6IlYtTlBwQ1kifQ.2KPxu2Nv_c5IPZMZj7EFcw"
      />
    </Flex>
  )
}
