import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Image,
  Stack,
  Link,
  PseudoBox,
} from "@chakra-ui/core";
import RouterLink from "next-translate/Link";
import { useDisclosure } from "@chakra-ui/core";
import { FiMenu } from "react-icons/fi";
import style from "./styles.module.scss";

function MyDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <PseudoBox color="#4862a3" className={style["show-small"]}>
        <Button ref={btnRef} onClick={onOpen}>
          <FiMenu color="strawberry" />
        </Button>
      </PseudoBox>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        variantColor="cyan"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Stack fontSize="3xl" fontFamily="PT Sans">
            <MobileNavItem title="HOME" link="/" />
            <MobileNavItem title="SERVICES" link="/services" />
            <MobileNavItem title="WORK" link="/work" />
            <MobileNavItem title="HIRE US" link="/hire-us" />
          </Stack>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function NavItem({ title, link }) {
  return (
    <PseudoBox
      borderWidth="3px"
      borderColor="transparent"
      mr="4"
      px="2"
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

function MobileNavItem({ title, link }) {
  return (
    <PseudoBox
      borderWidth="3px"
      borderColor="transparent"
      mr="4"
      p="4"
      _hover={{
        color: "strawberry",
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
        w="100%"
        h="5px"
        backgroundImage="url(https://res.cloudinary.com/s966/image/upload/f_auto/v1589137015/s966/logo_fiormf.png)"
        backgroundRepeat="repeat"
      />
      <Flex as="nav" alignItems="center" h="100px" color="strawberry">
        <RouterLink href={"/"}>
          <PseudoBox _hover={{ cursor: "pointer" }}>
            <Image
              w="80%"
              src="/static/images/logo.png"
              alt="Studio 966 Logo."
            />
          </PseudoBox>
        </RouterLink>
        <Stack
          className={style["hide-small"]}
          fontSize="3xl"
          fontFamily="PT Sans"
          isInline
        >
          <NavItem title="SERVICES" link="/services" />
          <NavItem title="WORK" link="/work" />
          <NavItem title="HIRE US" link="/hire-us" />
        </Stack>
        <MyDrawer />
      </Flex>
    </Flex>
  );
}
