import {
  Flex,
  Image,
  SimpleGrid,
  Heading,
  Text,
  PseudoBox,
} from "@chakra-ui/core";
import Link from "next-translate/Link";

function Item({ href, src, alt, title, body }) {
  return (
    <Flex direction="column" my="5">
      <PseudoBox _hover={{ cursor: "pointer" }}>
        <Link href={href}>
          <Image src={src} alt={alt} />
        </Link>
        <Link href={href}>
          <Heading as="h1" size="md" my="5">
            {title}
          </Heading>
        </Link>
      </PseudoBox>
      <Text lineHeight="1.7">{body}</Text>
    </Flex>
  );
}

export default function WorkExamples() {
  return (
    <SimpleGrid columns={["1", "2", "3"]} w="90%" spacing="6" my="5">
      <Item
        href="#"
        src="/static/images/work/hunger-station-cover.png"
        alt=""
        title="Hunger Station"
        body="Studio 966 collaborated with Hunger Station team to identify their current UX issues through comprehensive user studies with users around the Kingdom of Saudi Arabia. Studio 966 then did a full UX & UI redesign of Hunger Station mobile apps."
      />
      <Item
        href="#"
        src="/static/images/work/haweee-cover.png"
        alt=""
        title="Haweee"
        body="Haweee is a Saudi startup trying to connect amateur sport players in the real world. Studio 966 & Haweee worked on designing and developing iOS and Android apps that does just that."
      />
      <Item
        href="#"
        src="/static/images/work/namaa-cover.png"
        alt=""
        title="Namaa Almunawara"
        body="Studio 966 partnered with Namaa Almunawara to design a full solution to it's annual entrepreneurship conference. The final solution was an integeral part of the conference experience; which included scheduling, ticketing, applicant surveys, to name a few. "
      />
      <Item
        href="#"
        src="/static/images/work/albaik-cover.png"
        alt=""
        title="ALBAIK"
        body="How do you ease the waiting times at the Kingdom's most successful fast food chain? That is the question ALBAIK & Studio 966 tried to answer through various user studies resulting in a beautifully designed web and mobile apps. "
      />
      <Item
        href="#"
        src="/static/images/work/currrva-cover.png"
        alt=""
        title="Currrva"
        body="The mobile startup Currrva collaborated with Studio 966 in order to design and develop a platform for video gamers to keep score of their results against their fiercest rivals (read: friends.) "
      />
      <Item
        href="#"
        src="/static/images/work/sift-cover.png"
        alt=""
        title="Sift"
        body="Sift is our own clever little app that we designed at Studio 966. If you often find yourself hearing about film or book recommendations from your friends and family but never get around to actually exploring them, this app would serve you well."
      />
    </SimpleGrid>
  );
}