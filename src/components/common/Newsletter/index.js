import { Grid, Heading, Text } from '@chakra-ui/core'

function Item() {
  return (
    <Grid
      gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
      align="center"
      justifySelf="center"
      gridGap={10}
      w="60%"
      background="mustard"
    >
      <Grid gridTemplateRows="1fr 3fr">
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
        <script src="https://f.convertkit.com/ckjs/ck.5.js" />
        <form
          action="https://app.convertkit.com/forms/1359591/subscriptions"
          className="seva-form formkit-form"
          method="post"
          data-sv-form="1359591"
          data-uid="3c9de99870"
          data-version="5"
          data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
          min-width="400 500 600 700 800"
        >
          <div data-style="clean">
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            />
            <div
              data-element="fields"
              data-stacked="false"
              className="seva-fields formkit-fields"
            >
              <div className="formkit-field">
                <label style={{ color: '#ad6c0c' }}>
                  What is your Your name?
                  <input
                    className="formkit-input"
                    aria-label="Your first name"
                    style={{
                      color: 'rgb(0, 0, 0)',
                      borderColor: 'rgb(227, 227, 227)',
                      borderRadius: '4px',
                      fontWeight: 400,
                      marginTop: '10px',
                    }}
                    name="fields[first_name]"
                    placeholder="Your first name"
                    type="text"
                  />
                </label>
              </div>
              <div className="formkit-field">
                <label style={{ color: '#ad6c0c' }}>
                  What is your e-mail?
                  <input
                    className="formkit-input"
                    name="email_address"
                    style={{
                      color: 'rgb(0, 0, 0)',
                      borderColor: 'rgb(227, 227, 227)',
                      borderRadius: '4px',
                      fontWeight: 400,
                      marginTop: '10px',
                    }}
                    placeholder="Your email address"
                    required=""
                    type="email"
                  />
                </label>
              </div>
              <button
                data-element="submit"
                className="formkit-submit formkit-submit"
                style={{
                  color: 'rgb(255, 255, 255)',
                  borderColor: 'rgb(237, 101, 85)',
                  borderRadius: '0px',
                  fontWeight: 700,
                }}
              >
                <div className="formkit-spinner">
                  <div />
                  <div />
                  <div />
                </div>
                <span>Subscribe</span>
              </button>
            </div>
            <a
              href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
              className="formkit-powered-by"
              data-element="powered-by"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered By ConvertKit
            </a>
          </div>
        </form>
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
