import { Center, Card, CardBody, Flex, Icon, Heading, Text } from "@chakra-ui/react";
import { FaNewspaper } from "react-icons/fa";

export default function BlankCard(props: any) {
  return (
    <Center py={10}>
      <Card.Root
        maxW="md"
        w="100%"
        bg="gray.200"
        boxShadow="md"
        borderRadius="lg"
        textAlign="center"
        p={6}
       
      >
        <CardBody>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Icon as={FaNewspaper} boxSize={12} color="gray.400" mb={4} />
            <Heading size="md" color="gray.700" mb={2}>
              No Articles Found
            </Heading>
            <Text color="gray.500">
             {props.description}
            </Text>
          </Flex>
        </CardBody>
      </Card.Root>
    </Center>
  );
}
