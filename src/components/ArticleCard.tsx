// import {Center, Text, Stack, Avatar, Image, Button, Badge, Link, CardHeader, Card, CardBody} from "@chakra-ui/react";
// import { FaEdit } from "react-icons/fa";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function ArticleCard(props:any) {

//     const navigate = useNavigate();
//     const location = useLocation();

//     const handleReadMore = () => {
//   const pathParts = location.pathname.split('/').filter(Boolean);

//   if (pathParts[0] === 'category' && pathParts[1]) {
    
//     navigate(`/category/${pathParts[1]}/${props.article_id}`);
//   } else {
    
//     navigate(`/${props.article_id}`);
//   }
// };

//   return (


//     <Center>
//         <Card.Root minH={"450px"} maxW={"400px"} boxShadow={"2xl"} rounded={"md"} p={4} overflow={"hidden"}>

//             <CardHeader  bg={"gray.100"} mt={-6} mx={-6} mb={2} pos={"relative"}>
//                 {props.image_url === null ? <Image h={{base:"200px", md:"200px"}} w="lg" src="src\assets\images\dummy_img.jpg" fill={"context-fill"} alt="Article Image" />:
//                     <Image h={{base:"200px", md:"200px"}} w="lg" src={props.image_url} fill={"context-fill"} alt="Article Image" />}
       
//             </CardHeader>

//             <Stack mt={4} direction={"row"} gap={4} align={"center"}>
//                 <Avatar.Root mr={"15px"}>
//                     <Avatar.Fallback name={props.source_name} />
//                     <Avatar.Image src={props.source_icon} />
//                 </Avatar.Root>

//                 <Stack direction={"column"} gap={0} fontSize={"sm"}>
//                     <Text fontWeight={600}>{props.source_name}</Text>
//                     <Text color={"gray.500"}>{props.pubDate}</Text>
//                 </Stack>
//             </Stack>

//             <CardBody>
//                 <Text mt={3} fontFamily={"serif"} color={"gray.700"} fontSize={{base:"sm", md:"md"}}>
//                     {props.title}
//                 </Text>
//             </CardBody>
       
//             <Stack align={"center"} justify={"start"} direction={"row"} overflow={"auto"}>
//                 {props.category.length > 0 ? props.category.map((value: string, index: number) => (
//                     <Badge key={index} color={"white"} bg={"green.400"} px={3} py={2} fontWeight={"500"} borderRadius="md" fontSize={{base:"12px",md:"sm"}}>
//                         {value}
//                     </Badge>
//                 )): <Badge color={"white"} bg={"red.400"} px={2} py={2} fontWeight={"500"} borderRadius="md" fontSize={{base:"12px",md:"sm"}}>
//                         No Specified Category
//                     </Badge>}
//             </Stack>

//             <Stack mt={3} direction={"row"} gap={4}>
//                 <Button onClick={handleReadMore} flex={1} fontSize={{base:"sm",md:"md"}} rounded={"md"} bg={"blue.400"} color={"white"} 
//                     boxShadow={ "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)" } 
//                     _hover={{ bg: "blue.500",}} _focus={{bg: "blue.500",}}>
//                     Read More
//                 </Button>
//                 <Link flex={1} href={props.link} target='_blank'>
//                     <Button w={"full"} fontSize={{base:"sm",md:"md"}} rounded={"md"}>
//                        <FaEdit></FaEdit> Visit
//                     </Button>
//                 </Link>
//             </Stack>
                      

//         </Card.Root>
//     </Center>
//   )
// }

import {
  Box,
  Text,
  Stack,
  Avatar,
  Image,
  Button,
  Badge,
  Link,
  Card,
  CardBody,
  CardHeader,
  Flex,
} from "@chakra-ui/react";
import { FaEdit, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function ArticleCard(props: any) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleReadMore = () => {
    const pathParts = location.pathname.split('/').filter(Boolean);

    if (pathParts[0] === 'category' && pathParts[1]) {
      navigate(`/category/${pathParts[1]}/${props.article_id}`);
    }else if (pathParts[0] === 'search') {
      navigate(`/search/${props.article_id}`);
    } else {
      navigate(`/${props.article_id}`);
    }
  };



  return (
    <Card.Root
      bg={"white"}
      maxW="sm"
      w="full"
      boxShadow={"dark-lg"}
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
    >
      {/* Image */}
      <Box pos="relative">
        {props.image_url === null ? <Image h={{base:"200px", md:"200px"}} w="lg" src="src\assets\images\dummy_img.jpg" fill={"context-fill"} alt="Article Image" />:
                    <Image h={{base:"200px", md:"200px"}} w="lg" src={props.image_url} fill={"context-fill"} alt="Article Image" />}

        <Flex pos="absolute" top="10px" left="10px" wrap="wrap" gap="2">

          {props.category.length > 0 ? props.category.map((value: string, index: number) => (
                     <Badge key={index} color={"white"} bg={"green.400"} px={3} py={2} fontWeight={"500"} borderRadius="md" fontSize={{base:"12px",md:"sm"}}>
                        {value}
                     </Badge>
                 )): <Badge color={"white"} bg={"red.400"} px={2} py={2} fontWeight={"500"} borderRadius="md" fontSize={{base:"12px",md:"sm"}}>
                         No Specified Category
                     </Badge>}
        </Flex>
      </Box>

      <CardBody p={"15px"}>
      
        <Flex align="center" mb={3}>

                       <Avatar.Root mr={"15px"}>
                    <Avatar.Fallback name={props.source_name} />
                    <Avatar.Image src={props.source_icon} />
               </Avatar.Root>
          <Box>
            <Text fontWeight="bold" fontSize="sm">
              {props.source_name}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {new Date(props.pubDate).toLocaleDateString()}
            </Text>
          </Box>
        </Flex>

  
        <Text maxLines={3} fontSize="md" fontWeight="semibold" color="gray.700" mb={4}>
          {props.title}
        </Text>

       
        <Stack direction="row" gap={3}>
            <Link flex={1} href={props.link} target='_blank'>
                    <Button w={"full"} fontSize={{base:"sm",md:"md"}} rounded={"md"}>
                        <FaEdit></FaEdit> Visit
                     </Button>
            </Link>
          <Button
            flex={1}
            fontSize="sm"
            color="black"
            bg={"white"}
            border={"1px solid black"}
            rounded={"md"}
            onClick={handleReadMore}
            _hover={{ bg: "gray.800", color:"white" }}
            fontWeight={"bold"}
          >
            Read More
          </Button>
        </Stack>
      </CardBody>
    </Card.Root>
  );
}

