import { Flex, Heading, Stack, Spacer, Link, IconButton, Button} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";


export default function Navbar() {

  const [isNavOpen , setIsNavOpen] = useState(false);

  const toggleMenu = ()=>{
    setIsNavOpen(!isNavOpen);
    
  }

  return (
    <Flex
      as={"nav"}
      p={"15px 0px 15px 0px"}
      justifyContent={"centre"}
      alignItems={"center"}
      bg={"#c48cf5"}
      align={"center"}
      wrap={"wrap"}
    >
      <Heading as={"h1"} ml={"30px"} fontSize={"2xl"} fontWeight={"bold"} color={"#003B36"}>
        Maazi Times
      </Heading>
      <Spacer />

      <IconButton onClick={toggleMenu} display={{base:"flex", md:"none"}} alignItems={"centre"} justifyContent={"center"} mr={"10px"}  bg={"none"}>
        {isNavOpen? <FaTimes /> : <FaBars aria-label="ToggleMenu"  />} 
      </IconButton>
      
      
      <Stack mr={{base:"0px", md:"30px"}} gap={{base:"30px", md: "20px"}} direction={{base:"column", md:"row"}} display={{base:isNavOpen?"flex":"none", md:"flex"}} w={{base:"full", md:"auto"}} h={{base:"100vh", md:"auto"}} justifyContent={"center"} alignItems={"center"} >
        <Button rounded={"lg"} size={"md"} variant={"ghost"} p={"10px"} >
          <Link fontWeight={"bold"} fontSize={{base:"lg", md:"sm"}} href="/" >Home</Link>
        </Button>

        <Button rounded={"lg"} size={"md"} variant={"ghost"} p={"10px"} >
          <Link fontWeight={"bold"} fontSize={{base:"lg", md:"sm"}} href="/category">Category</Link>
        </Button>

        <Button rounded={"lg"} size={"md"} variant={"ghost"} p={"10px"} >
          <Link fontWeight={"bold"} fontSize={{base:"lg", md:"sm"}} href="/search">Search</Link>
        </Button>

      </Stack>
    </Flex>
  );
}
