import {Center, Text, Stack, Avatar,  Link, Card, VStack} from "@chakra-ui/react";


export default function SideNews(props:any) {

  return (


    <Center>
        <Card.Root border={"none"} bg={"gray.800"} w={"full"}  rounded={"md"} p={"15px"} overflow={"hidden"}>

            <Link flex={1} href={props.url} target='_blank'>

            

            <Stack direction={"column"} fontSize={"sm"}>

                    <Stack mt={2} direction={"row"} gap={4} align={"center"}>
                        <Avatar.Root mr={"5px"}>
                            <Avatar.Fallback name={"Source Icon"} />
                            <Avatar.Image src={props.icon} />
                        </Avatar.Root>

                        <VStack align={"start"} gap={1}>

                        <Text fontFamily={"arial"} color={"white"} fontWeight={"semibold"}>{props.name}</Text>
                        
                        <Text fontSize={"sm"} color="gray.400">
                            {new Date(props.last_fetch).toLocaleDateString()}
                        </Text>
                        </VStack>

                    </Stack>

                    

                        <Text fontFamily={"arial"}  color={"gray.400"} mt={3}   fontSize={{base:"sm", md:"md"}}>
                                {props.description}
                            </Text>
                        </Stack>
             
                  

            </Link>

        </Card.Root>
    </Center>
  )
}
