import { Box, Grid, Heading, Link, Text } from '@chakra-ui/core'

function Item({ src, alt, href }) {
  return (
    <Grid
      gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
      align="center"
      justifySelf="center"
      gridGap={10}
      w="67%"
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
        <div id="mc_embed_signup">
          <form
            action="http://currrva.us8.list-manage.com/subscribe/post?u=03baa6734b1ba1e29373d4fe4&amp;id=11d6d828b6"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div class="mc-field-group">
              <label for="mce-FULLNAME">Full Name </label>
              <input type="text" value="" name="FULLNAME" class="" id="mce-FULLNAME" />
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL">
                Email Address <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
              />
            </div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style={{ display: 'none' }} />
              <div
                class="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              />
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }}>
              <input
                type="text"
                name="b_03baa6734b1ba1e29373d4fe4_11d6d828b6"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default function Newsletter() {
  return (
    <Grid py="50px" background="#f4b860" w="100%">
      <Item />
    </Grid>
  )
}
