import {
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Select,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Box,
} from '@chakra-ui/core'

export default function ContacUsForm() {
  return (
    <Flex direction="column" my="8">
      <Heading>You should hire us! </Heading>
      <Text my="6">
        So, you've got a cool project in mind and don't know where to start? Drop us a
        line!{' '}
      </Text>
      <FormControl as="form" data-netlify="true">
        <Stack spacing="8">
          <Box>
            <FormLabel htmlFor="name">Your Name *</FormLabel>
            <Input id="name" isRequired name="name" />
          </Box>

          <Box>
            <FormLabel htmlFor="email">Email *</FormLabel>
            <Input type="email" id="email" isRequired name="email" />
          </Box>

          <Box>
            <FormLabel htmlFor="project-details">Tell us about your project *</FormLabel>
            <Textarea id="project-details" isRequired name="project" />
          </Box>

          <Box>
            <FormLabel htmlFor="budget">What is your budget range? *</FormLabel>
            <Select id="budget" name="budget">
              <option value="I am not sure">I am not sure</option>
              <option value="Under SAR 50,000">Under SAR 50,000</option>
              <option value="Between SAR 50,000 and SAR 100,000">
                Between SAR 50,000 and SAR 100,000
              </option>
              <option value="Over SAR 100,000">Over SAR 100,000</option>
            </Select>
          </Box>

          <Box>
            <FormLabel htmlFor="start-time">When would like to get started?</FormLabel>
            <Input id="start-time" name="start-time" />
          </Box>

          <Box>
            <FormLabel htmlFor="hear-about-us">How did you hear about us?</FormLabel>
            <Input id="hear-about-us" name="hear-about-us" />
          </Box>
          <Button
            type="submit"
            w="180px"
            alignSelf="flex-end"
            variant="solid"
            variantColor="red"
            rounded="0"
            h="60px"
            w="120px"
          >
            Submit
          </Button>
        </Stack>
      </FormControl>
    </Flex>
  )
}
