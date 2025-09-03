import { Box, Container, Heading, Stack, Text, Flex, Badge, Button } from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function CarousalCard(card: any) {

  const navigate = useNavigate();
  const location = useLocation();


  const handleReadMore = () => {

    const pathParts = location.pathname.split('/').filter(Boolean);

    if (pathParts[0] === 'category' && pathParts[1]) {
      navigate(`/category/${pathParts[1]}/${card.article_id}`);
    }else if (pathParts[0] === 'search') {
      navigate(`/search/${card.article_id}`);
    } else {
      navigate(`/${card.article_id}`);
    }
  };

  return (
    <Box
      height={{ base: '100vh', md: '100vh' }}
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${card.image_url})`}
      overflow="hidden"

    >

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.7)"
        zIndex={1}
      />

  
      <Container  position="relative" mx={"auto"} zIndex={2} maxW={{base:"330px", md:"550px" , lg:"700px", xl:"1100px"}} h="100%">
        <Flex direction="column" justify="center" h="100%" color="white">
          <Stack  gap={4} textAlign="left" maxW="3xl" px={{ base: 4, md: 0 }}>
                <Badge p={"10px"} bg={"white.400"} color={"black"} fontSize="md" w="fit-content">
                {card.source_name}
                </Badge>

                <Heading fontFamily={"helvetica"} fontSize={{ base: 'xl', md: '4xl' }} lineHeight="shorter">
                {card.title}
                </Heading>

                <Text fontFamily={"arial"} fontSize={{ base: 'sm', md: 'md' }} maxLines={3}>
                {card.description}
                </Text>

                <Text fontSize="sm" color="gray.300">
                {new Date(card.pubDate).toLocaleDateString()}
                </Text>
                
              <Button _hover={{bg: "gray.700", color:"white"}} border={"1px solid white"} w={"120px"} fontSize={"md"} fontFamily={"arial"} bg={"gray.900"} color={"white"} onClick={handleReadMore} mt={"10px"} fontWeight={"bold"} p={"15px 25px"} rounded={"sm"} >
                Read More
              </Button> 
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}
