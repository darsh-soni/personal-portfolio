import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiAndroid } from "react-icons/di";
import { FaCertificate } from "react-icons/fa";

function Social() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          2+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Developer and CyberSecurity Researcher - Specialised in python
          development.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
            {/* Android */}
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              
              <Link  onClick={()=> window.open("https://github.com/darshsoni28/MemeCat", "_blank")}>
                Android Apps
                
              </Link>
            </Text>
            
          </Flex>

          {/* Certificate */}
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            marginLeft='2'
          >
            <Icon color="white" p="4" as={FaCertificate} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              
              <Link  onClick={()=> window.open("https://media-exp1.licdn.com/dms/image/C4D22AQGBAiy-tlt1Qw/feedshare-shrink_800/0/1653025060575?e=1660176000&v=beta&t=3IYQ1f2GyqTouS_QiAx635dLK_hzJMpS4ZPCxLFK9aQ", "_blank")}>
                Certificates
                
              </Link>
            </Text>
            
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Social;
