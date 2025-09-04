import { Box, Text, Image, Link, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import fallback from "../assets/images/fallback_img.jpg"

export default function NewsCard(props:any) {

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
  <>

    <Link borderBottomWidth={"1px"} borderBottomColor={"gray.500"} target="_blank" display={"flex"} justifyContent={{base:"center", md:"start"}} width={"full"} href={props.link}>
      
      <Box  p={{ base: "26px 30px", md: "30px 30px" }}>

        <Flex ml={{md:"20px"}} gap={{base:"18px", md:"28px"}}  flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>

          {props.image_url === null ? 
            <Image w={{ base: "100px", md: "300px" }} h={{ base: "100px", md: "200px" }} objectFit="cover" borderRadius="md" src={fallback} alt={"Article Image"}/> :
            <Image w={{ base: "100px", md: "300px" }} h={{ base: "100px", md: "200px" }} objectFit="cover" borderRadius="md" src={props.image_url} alt={"Article Image"}/>
          }

          <Flex   maxW={{ md:"420px", lg:"600px", xl:"800px"}} flexDirection={"column"} justifyContent={"center"} alignItems={"start"}>
              
              <Heading  fontSize={{ base: "md", md: "2xl" }} color={"white"} lineHeight="short" mb={{ base: 2, md: 3}}>
                {props.title}
              </Heading>

              {!isMobile && 
                <Text fontSize={{ base: "sm", md: "md" }} maxLines={2} color="gray.300" mb={3}>
                  {props.description}
                </Text>
              }

              <Text fontSize={{ base: "sm", md: "sm" }} color="gray.400">
                {new Date(props.pubDate).toLocaleDateString()}
              </Text>


          </Flex>

        </Flex>
      </Box>
    </Link>

  </>
  )
}
