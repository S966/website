import { Box, Grid, Heading, Link, Text } from '@chakra-ui/core'

function Item({ src, alt, href }) {
  return (
    <Grid
      gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
      align="center"
      justifySelf="center"
      gridGap={10}
      w="60%"
      background="mustard"
    >
      <Grid gridTemplateRows="auto auto">
        <Heading
          fontFamily="PT Sans"
          fontWeight="100"
          textTransform="uppercase"
          fontSize="2.3125rem"
          color="#ad6c0c"
        >
          The 966 Newsletter
        </Heading>
        <Text color="#4d4d4d">
          Sign up for our weekly newsletter of the best articles on startups,
          entrepreneurship, technology, programming, and more. All links are curated by
          hand from the most talked about content in the tech community.
        </Text>
      </Grid>
      <Grid>
        <script
          async
          data-uid="d1e4247910"
          src="https://966.ck.page/d1e4247910/index.js"
        />
      </Grid>
    </Grid>
  )
}

export default function Newsletter() {
  return (
    <Grid py="30px" background="#f4b860" w="100%">
      <Item />
    </Grid>
  )
}
