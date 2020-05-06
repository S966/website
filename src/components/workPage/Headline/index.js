import { Heading, Text, Flex, PseudoBox } from '@chakra-ui/core'
import style from './styles.module.scss'

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
      className={style['banner']}
    >
      <Heading
        className={style['article_title']}
        as="h1"
        fontSize="217.054px"
        textTransform="uppercase"
      >
        <PseudoBox className={style['char1']}>W</PseudoBox>
        <PseudoBox className={style['char2']}>e</PseudoBox>
        <PseudoBox className={style['char3']}> </PseudoBox>
        <PseudoBox className={style['char4']}>S</PseudoBox>
        <PseudoBox className={style['char5']}>c</PseudoBox>
        <PseudoBox className={style['char6']}>r</PseudoBox>
        <PseudoBox className={style['char7']}>a</PseudoBox>
        <PseudoBox className={style['char8']}>t</PseudoBox>
        <PseudoBox className={style['char9']}>c</PseudoBox>
        <PseudoBox className={style['char10']}>h</PseudoBox>
        <PseudoBox className={style['char11']}> </PseudoBox>
        <PseudoBox className={style['char12']}>O</PseudoBox>
        <PseudoBox className={style['char13']}>u</PseudoBox>
        <PseudoBox className={style['char14']}>r</PseudoBox>
        <PseudoBox className={style['char15']}> </PseudoBox>
        <PseudoBox className={style['char16']}>O</PseudoBox>
        <PseudoBox className={style['char17']}>w</PseudoBox>
        <PseudoBox className={style['char18']}>n</PseudoBox>
        <PseudoBox className={style['char19']}> </PseudoBox>
        <PseudoBox className={style['char20']}>I</PseudoBox>
        <PseudoBox className={style['char21']}>t</PseudoBox>
        <PseudoBox className={style['char22']}>c</PseudoBox>
        <PseudoBox className={style['char23']}>h</PseudoBox>
      </Heading>
      <Heading
        size="xl"
        mt="90px"
        color="white"
        fontWeight="400"
        mx="10"
        w="55%"
        lineHeight="1.6"
        textAlign="center"
      >
        We love to solve problems. Give us your problems and we'll make them go away! Just
        like all the satisfied clients below.{' '}
      </Heading>
    </Flex>
  )
}
