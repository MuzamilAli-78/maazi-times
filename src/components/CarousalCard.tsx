import { Box, Container, Heading, Stack, Text, Flex, Badge } from '@chakra-ui/react'

export default function CarousalCard(card: any) {
  return (
    <Box
      height={{ base: '450px', md: '600px' }}
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${card.image_url})`}
      borderRadius="xl"
      overflow="hidden"
      mx={"15px"}
    >

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={1}
      />

  
      <Container position="relative" mx={"auto"} zIndex={2} maxW="container.lg" h="100%">
        <Flex direction="column" justify="center" h="100%" color="white">
          <Stack gap={4} textAlign="left" maxW="3xl" px={{ base: 4, md: 0 }}>
                <Badge p={"10px"} bg={"white.400"} color={"black"} fontSize="md" w="fit-content">
                {card.source_name}
                </Badge>

                <Heading fontSize={{ base: '2xl', md: '4xl' }} lineHeight="shorter">
                {card.title}
                </Heading>

                <Text fontSize={{ base: 'sm', md: 'md' }} maxLines={3}>
                {card.description}
                </Text>

                <Text fontSize="sm" color="gray.300">
                {new Date(card.pubDate).toLocaleDateString()}
                </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}
