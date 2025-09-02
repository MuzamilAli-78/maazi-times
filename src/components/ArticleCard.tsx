import { Box, Text, Stack, Avatar, Image, Button, Badge, Link, Card, CardBody, Flex} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
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
    <Card.Root bg={"white"} maxW="sm" w="full" boxShadow={"dark-lg"} borderRadius="lg" overflow="hidden" transition="transform 0.2s" _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}>
   
      <Box pos="relative">
        {props.image_url === null ? <Image h={{base:"200px", md:"200px"}} w="lg" src="src/assets/images/fallback_img.jpg" fill={"context-fill"} alt="Article Image" />:
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

