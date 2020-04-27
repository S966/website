import { Flex, Box, Image, Stack, Link, PseudoBox } from "@chakra-ui/core";
import RouterLink from "next-translate/Link";

function NavItem({ title, link }) {
  return (
    <PseudoBox
      borderWidth="3px"
      borderColor="transparent"
      mr="4"
      p="4"
      _hover={{
        borderWidth: "3px",
        borderColor: "#ed6555",
      }}
    >
      <RouterLink href={link} passHref>
        <Link>{title}</Link>
      </RouterLink>
    </PseudoBox>
  );
}

export default function Header() {
  return (
    <Flex as="header" flexDirection="column" w="100%" alignItems="center">
      <Box
        as="img"
        w="100%"
        h="1"
        backgroundImage="url(/static/images/header_repeat.jpg)"
        backgroundRepeat="repeat"
      />
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-around"
        w="80%"
        mt="4"
        color="#ed6555"
      >
        <Image src="/static/images/logo.png" alt="Studio 966 Logo." />
        <Stack isInline>
          <NavItem title="SERVICES" link="/services" />
          <NavItem title="WORK" link="/work" />
          <NavItem title="HIRE US" link="/hire-us" />
        </Stack>
      </Flex>
    </Flex>
  );
}
