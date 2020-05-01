import { Grid, Heading, Box, Text, Flex } from "@chakra-ui/core";

function Item({ title, body }) {
  return (
    <Box mt="6">
      <Heading lineHeight="1.4">{title}</Heading>
      <Text mt="3" lineHeight="1.8">
        {body}
      </Text>
    </Box>
  );
}

export default function ServicesBody() {
  return (
    <Flex w="70%" direction="column" justify="center" align="center" my="8">
      <Text fontSize="xl">
        Just like people, we know that every project we work with is different –
        yet we give each one the same enthusiastic level of care, attention to
        detail, and accuracy it deserves. Here’s an idea of how we work.
      </Text>
      <Box
        w="100%"
        borderStyle="dotted"
        borderWidth="1px"
        color="#555"
        mt="12"
        mb="8"
      />
      <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]} gap="10">
        <Flex direction="column">
          <Item
            title="IT STARTS WITH A CLEAR VISION"
            body="Beginning with the end in mind is crucial. You want a successful project that fulfills all your goals and realizes your grand vision; so do we."
          />
          <Item
            title="Robust Communication"
            body="Reaching an understanding with our clients – with you – is always our priority. Frequent communication with you, for honest criticism and feedback, is necessary for success: we will need your input every step of the way. After all, it’s your app."
          />
          <Item
            title="Research"
            body="Once we have a clear idea of what our goals are and where we’re headed, we start conducting our own research to answer the lingering questions that remain around the issues we’re trying to solve. We take our research process very seriously, because we know that only through solid research can we make the right decisions with confidence. Putting in this effort at the onset of a project will save countless hours for everyone involved, making the process easier and the end result more effective."
          />
          <Item
            title="Strategy"
            body="Next, our all-important strategy comes in. Putting our research into practice means crafting a uniquely customized strategy to implement our solutions to each distinctive situation. To put it together, we always keep in mind any constraints that may bind you, and our plan ensures that we get the best out of whichever resources we do have access to. You’re kept well up-to-date on the strategy, which is vetted for your approval, but that’s the extent of your involvement – implementing it is left up to us, and do we deliver!"
          />
        </Flex>
        <Flex direction="column">
          <Item
            title="AND SOLID THINKING LEADS TO SUCCESS"
            body="There are countless potential roads to success; the trick is identifying which one to follow."
          />
          <Item
            title="Design"
            body=" Starting with just a pencil, we sketch out our different ideas and design solutions, continually reexamining and updating them in light of our agreed goals and priorities. In developing the high-level concepts for our app’s visual interface, structure, and interaction, we base the process on our in-depth understanding for your business goals and user needs, guided by our research and previous communication with you.

            We’ve already collaborated in pinpointing the look-and-feel of our conceptual framework. Now it's time to dig more deeply into the details of structure and interaction of the application. Only then will we be able to say we’ve given you an app that truly fulfills all your needs and delivers beyond your expectations – which we always do!"
          />
          <Item
            title="AU REVOIR? NOT QUITE YET"
            body="Our projects are never simply handed over after ticking off our list of deliverables, but only after ensuring we've put you well on your way to success. We test and re-test, polish and re-polish versions of your product until both of us – developer and client – are completely satisfied. Only then do we release your application. With our hard work, cutting-edge strategy, and top-notch design, you’re all set: from now on, success is up to you."
          />
        </Flex>
      </Grid>
    </Flex>
  );
}
