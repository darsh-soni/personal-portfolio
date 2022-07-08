import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import Header from "./components/Header";
import Social from "./components/Social";
import Footer from "./components/Footer";
import { Flex, Heading, VStack, Spacer } from "@chakra-ui/react";


export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Darsh Soni
        </Heading>

        <Spacer></Spacer>
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={()=> window.open("https://www.linkedin.com/in/darsh-soni/", "_blank")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={()=> window.open("https://www.instagram.com/darsh._.soni/", "_blank")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={()=> window.open("https://github.com/darshsoni28/darshsoni.github.io", "_blank")}
          
          
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header />
      <Social />
      <Footer />
    </VStack>
   
  );
}
