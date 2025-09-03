import { Box, Flex, Text, Link, HStack, Separator, Center, Image} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin} from "react-icons/fa6";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Footer() {

    const navigate = useNavigate();
    const categories = [
        "Business",
        "Crime",
        "Education",
        "Politics",
        "Science",
        "Sports",
        "Technology",
        "Top",
        "World",
    ];
    

  return (
    <Box bg="gray.900" color="gray.300" mt={12} py={8} px={{ base: 4, md: 12 }}>

        <Center mb={"15px"}>
            <Image alt="Logo" h={{ base: "30px", md: "30px"}} src="../src/assets/images/logo.png"></Image>
        </Center>

        <Flex direction={"row"} justifyContent={"center"} alignItems={"center"} wrap="wrap" gap={3} fontSize="md" mb={4}>
            {categories.map((item, index) => (
                <Link key={index} color="gray.400" cursor="pointer" _hover={{ textDecoration: "underline", color: "gray.200" }} fontFamily="arial" onClick={() => navigate(`/category/${item.toLowerCase()}`)}>
                    {item}
                </Link>
            ))}
        </Flex>

        <Separator borderColor="gray.700" my={6} />

        <Center my={4} >
            <HStack gap={5}>

                <Link fontSize={"xl"} color={"white"} target="_blank" href="mailto:muzamil.ali2044@gmail.com">
                    <FaGoogle />
                </Link>

                <Link fontSize={"xl"} color={"white"} target="_blank" href="https://www.instagram.com/maazi.78/">
                    <FaInstagram />
                </Link>

                <Link fontSize={"xl"} color={"white"} target="_blank" href="https://www.linkedin.com/in/muzamil-ali67/">
                    <FaLinkedin />
                </Link>

                <Link fontSize={"xl"} color={"white"} target="_blank" href="https://github.com/Maazi-78">
                    <FaGithub />
                </Link>
    
            </HStack>
        </Center>
        

        <Center>
            <Text fontSize="md" color="gray.400">
                Copyright © 2025 Insight Loop. All rights reserved.
            </Text>
        </Center>

    </Box>
  );
}
