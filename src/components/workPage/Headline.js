import { Heading, Text, Flex } from "@chakra-ui/core";

export default function Headline() {
  return (
    <Flex
      direction="column"
      h="420px"
      w="95%"
      my="6"
      align="center"
      justify="center"
      backgroundImage="url(http://www.966.io/images/pattern.png), linear-gradient(45deg, #362d6c 0%,#23d7db 119%)"
    >
      <Heading as="h1" size="2xl" textTransform="uppercase">
        We Scratch Our Own Itch
      </Heading>
      <Heading
        size="lg"
        mt="6"
        color="white"
        mx="10"
        w="60%"
        lineHeight="1.6"
        textAlign="center"
      >
        We love to solve problems. Give us your problems and we'll make them go
        away! Just like all the satisfied clients below.{" "}
      </Heading>
    </Flex>
  );
}
