import { Box, Text, Stack, Image, Button, Link, Card, CardBody } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import fallback from "../assets/images/fallback_img.jpg"

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
    <Card.Root border={"none"} bg={"gray.800"} maxW="sm" w="full" boxShadow={"0px 0px 1px #a1a1aa"} borderRadius="lg" overflow="hidden" transition="transform 0.2s" _hover={{ transform: "translateY(-5px)", boxShadow:"1px 2px 4px #a1a1aa" }}>
   
      <Box pos="relative">
        {props.image_url === null ? <Image h={{base:"200px", md:"200px"}} w="lg" src={fallback} fill={"context-fill"} alt="Article Image" />:
                    <Image h={{base:"200px", md:"200px"}} w="lg" src={props.image_url} fill={"context-fill"} alt="Article Image" />}

   
      </Box>

      <CardBody p={"15px"}>
      


  
        <Text fontFamily={"serif"} fontSize={"md"} color={"white"} lineHeight="short" mb={1} maxLines={3}  >
          {props.title}
        </Text>
          <Text mb={"15px"} fontSize={{ base: "sm", md: "sm" }} color="gray.400">
                            {new Date(props.pubDate).toLocaleDateString()}
                          </Text>
       
        <Stack direction="row" gap={3}>
            <Link flex={1} href={props.link} target='_blank'>
                    <Button bg={"gray.900"}  w={"full"} fontSize={{base:"sm",md:"md"}} rounded={"md"}>
                        <FaEdit></FaEdit> Visit
                     </Button>
            </Link>
         
          <Button
            flex={1}
            fontSize="sm"
            bg={"gray.700"} 
            color={"white"}
            border={"1px solid #a1a1aa"}
            rounded={"md"}
            onClick={handleReadMore}
            _hover={{bg: "gray.800", color:"white"}}
          >
            Read More
          </Button>
        </Stack>
      </CardBody>
    </Card.Root>
  );
}

