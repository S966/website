import {
  Flex,
  PseudoBox,
  List,
  ListItem,
  Box,
  Link,
  Text,
  Grid,
  Stack,
} from '@chakra-ui/core'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import style from './styles.module.scss'

let year = new Date().getFullYear()

export default function Footer() {
  return (
    <Grid
      h="430px"
      background="#23D7DB"
      flexDirection="column"
      w="100%"
      alignItems="center"
      color="white"
    >
      <Stack fontSize="3em" direction="row" justify="center">
        <PseudoBox
          className={style['heartbeat']}
          _hover={{
            color: 'white',
          }}
          color="#00acee"
          px="18px"
        >
          <Link href="https://twitter.com/studio966">
            <FaTwitter />
          </Link>
        </PseudoBox>
        <PseudoBox
          className={style['heartbeat']}
          _hover={{ color: 'white' }}
          color="#4862a3"
          px="18px"
        >
          <Link href="https://facebook.com/studio966">
            <FaFacebookSquare />
          </Link>
        </PseudoBox>
      </Stack>

      <Flex
        direction={['column', 'column', 'column', 'row']}
        justify="space-around"
        justifySelf="center"
        align="center"
        fontSize="2em"
        w="60%"
      >
        <PseudoBox _hover={{ color: '#ed6555' }}>
          <Link>services </Link>
        </PseudoBox>
        <Text className={style['dot']} color="#ed6555">
          •
        </Text>
        <PseudoBox _hover={{ color: '#ed6555' }}>
          <Link>work</Link>
        </PseudoBox>
        <Text className={style['dot']} color="#ed6555">
          •
        </Text>
        <PseudoBox _hover={{ color: '#ed6555' }}>
          <Link>colophon</Link>
        </PseudoBox>
        <Text className={style['dot']} color="#ed6555">
          •
        </Text>
        <PseudoBox _hover={{ color: '#ed6555' }}>
          <Link>rss</Link>
        </PseudoBox>
      </Flex>
      <Stack direction="column" align="center" fontSize="1.205em">
        <Text>© {year}</Text>
        <Text>made in saudi arabia</Text>
      </Stack>
    </Grid>
  )
}
