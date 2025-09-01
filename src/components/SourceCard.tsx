import {Center, Text, Stack, Avatar,  Link, Card} from "@chakra-ui/react";


export default function SideNews(props:any) {

  return (


    <Center>
        <Card.Root w={"full"} boxShadow={"2xl"} rounded={"md"} p={4} overflow={"hidden"}>

            <Link flex={1} href={props.url} target='_blank'>

            

                        <Stack direction={"column"} gap={2} fontSize={"sm"}>

                    <Stack mt={4} direction={"row"} gap={4} align={"center"}>
                        <Avatar.Root mr={"15px"}>
                            <Avatar.Fallback name={"Source Icon"} />
                            <Avatar.Image src={props.icon} />
                        </Avatar.Root>

                        <Text fontWeight={600}>{props.name}</Text>
    

                    </Stack>

                    

                        <Text  mt={3} fontFamily={"serif"} color={"gray.700"} fontSize={{base:"sm", md:"md"}}>
                                {props.description}
                            </Text>
                        </Stack>
             
                  

            </Link>

        </Card.Root>
    </Center>
  )
}
