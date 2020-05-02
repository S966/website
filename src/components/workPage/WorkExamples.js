import {
  Flex,
  Image,
  SimpleGrid,
  Heading,
  Text,
  PseudoBox,
  Link,
} from "@chakra-ui/core";
import RouterLink from "next-translate/Link";

function Item({ href, src, alt, title, body }) {
  return (
    <Flex direction="column" my="5">
      <PseudoBox _hover={{ cursor: "pointer" }}>
        <RouterLink passHref href={href}>
          <Link>
            <Image src={src} alt={alt} />
          </Link>
        </RouterLink>
        <RouterLink passHref href={href}>
          <Heading as="h1" size="md" my="5">
            {title}
          </Heading>
        </RouterLink>
      </PseudoBox>
      <Text lineHeight="1.7">{body}</Text>
    </Flex>
  );
}

export default function WorkExamples() {
  return (
    <SimpleGrid columns={["1", "2", "3"]} w="90%" spacing="6" my="5">
      <Item
        href="/work/hunger-station"
        src="/static/images/work/hunger-station-cover.png"
        alt="Hunger Station Logo."
        title="Hunger Station"
        body="Studio 966 collaborated with Hunger Station team to identify their current UX issues through comprehensive user studies with users around the Kingdom of Saudi Arabia. Studio 966 then did a full UX & UI redesign of Hunger Station mobile apps."
      />
      <Item
        href="/work/hawee"
        src="/static/images/work/haweee-cover.png"
        alt="Hawee Logo."
        title="Haweee"
        body="Haweee is a Saudi startup trying to connect amateur sport players in the real world. Studio 966 & Haweee worked on designing and developing iOS and Android apps that does just that."
      />
      <Item
        href="/work/namaa-conference"
        src="/static/images/work/namaa-cover.png"
        alt="Namaa Almunawara Logo."
        title="Namaa Almunawara"
        body="Studio 966 partnered with Namaa Almunawara to design a full solution to it's annual entrepreneurship conference. The final solution was an integeral part of the conference experience; which included scheduling, ticketing, applicant surveys, to name a few. "
      />
      <Item
        href="/work/albaik"
        src="/static/images/work/albaik-cover.png"
        alt="Albaik Logo."
        title="ALBAIK"
        body="How do you ease the waiting times at the Kingdom's most successful fast food chain? That is the question ALBAIK & Studio 966 tried to answer through various user studies resulting in a beautifully designed web and mobile apps. "
      />
      <Item
        href="/work/currrva"
        src="/static/images/work/currrva-cover.png"
        alt="Currrva Logo."
        title="Currrva"
        body="The mobile startup Currrva collaborated with Studio 966 in order to design and develop a platform for video gamers to keep score of their results against their fiercest rivals (read: friends.) "
      />
      <Item
        href="/work/sift"
        src="/static/images/work/sift-cover.png"
        alt="Sift Logo."
        title="Sift"
        body="Sift is our own clever little app that we designed at Studio 966. If you often find yourself hearing about film or book recommendations from your friends and family but never get around to actually exploring them, this app would serve you well."
      />
    </SimpleGrid>
  );
}
