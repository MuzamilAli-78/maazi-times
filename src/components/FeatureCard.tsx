import {Center, Text, Stack, Avatar,  Link, Card, CardHeader, Button, Badge, Image, CardFooter} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";


export default function FeatureCard(props:any) {
  return (

    
    <Center>

        
          <Card.Root minH={{base:"300px", md:"390px"}} minW={"350px"} maxW={"400px"} boxShadow={"xl"} rounded={"md"} p={4} overflow={"hidden"}>

            <CardHeader  bg={"gray.100"} mt={-6} mx={-6} mb={2} pos={"relative"}>
                {props.image_url === null ? 
                    <Image h={{base:"150px", md:"200px"}} w="lg" src="src\assets\images\dummy_img.jpg" fill={"context-fill"} alt="Article Image" />:

                    <Image h={{base:"150px", md:"200px"}} w="lg" src={props.image_url} fill={"context-fill"} alt="Article Image" />}
                    
                    <Badge letterSpacing={"0.125em"} fontWeight={"bold"} boxShadow={"1px 2px 4px black"} position={"absolute"} left={"20px"} bottom={"20px"} color={"white"} bg={"green.400"} px={3} py={2}  borderRadius="md" fontSize={{base:"12px",md:"sm"}}>
                        {props.category[0]}
                    </Badge>
       
            </CardHeader>
    
             
                <Stack my={2} direction={"row"} gap={4} align={"center"}>
                    <Avatar.Root mr={"15px"}>
                        <Avatar.Fallback name={props.source_name} />
                        <Avatar.Image src={props.source_icon} />
                    </Avatar.Root>
    
                    <Stack direction={"column"} gap={0} fontSize={"sm"}>
                        <Text fontWeight={600}>{props.source_name}</Text>
                        <Text color={"gray.500"}>{props.pubDate}</Text>
                    </Stack>
                </Stack>
    
                    <Text mt={3}  fontFamily={"serif"} color={"gray.900"} fontSize={{base:"md", md:"md"}}>
                        {props.title.slice(0, 40).concat(" ........")}
                    </Text>
   
                    
                <CardFooter>

                    <Link w={"full"} mt={"25px"} href={props.link} target='_blank'>
                        <Button w={"full"} fontSize={{base:"sm",md:"md"}} rounded={"md"}>
                           <FaEdit></FaEdit> Visit
                        </Button>
                    </Link>
                </CardFooter>
           
                          
    
            </Card.Root>
        </Center>
  )
}
