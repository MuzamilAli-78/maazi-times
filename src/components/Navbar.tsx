import { Flex, Heading, Stack, Spacer, IconButton, Button, Box} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";


export default function Navbar() {

  const [isNavOpen , setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {pathname} = useLocation()


  const toggleMenu = ()=>{
    setIsNavOpen(!isNavOpen);
    
  }

    const toggleLoggedIn = ()=>{
    setIsLoggedIn(!isLoggedIn);
    
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
      <Heading as={"h1"} ml={"30px"} fontSize={"2xl"} fontWeight={"bold"} color={"#black"}>
        Maazi Times
      </Heading>
      <Spacer />

      <IconButton onClick={toggleMenu} display={{base:"flex", md:"none"}} alignItems={"centre"} justifyContent={"center"} mr={"10px"}  bg={"none"}>
        {isNavOpen? <FaTimes /> : <FaBars aria-label="ToggleMenu"  />} 
      </IconButton>
      
      <Stack mr={{base:"0px", md:"30px"}} gap={{base:"30px", md: "30px"}} ml={{base:"0px", md:"40px"}} direction={{base:"column", md:"row"}} display={{base:isNavOpen?"flex":"none", md:"flex"}} w={{base:"full", md:"auto"}} h={{base:"100vh", md:"auto"}} justifyContent={"center"} alignItems={"center"} >
   

        <NavLink  onClick={toggleMenu} to ={"/"} >
          <Box bg={pathname === "/" ? "#a778d1ff" : "transparent"} color={pathname === "/" ? "white" : "black"}  _hover={{bg: "#a778d1ff", color:"white"}} fontWeight={"bold"}  p={"8px 15px"} rounded={"sm"}>Home</Box>
        </NavLink>
 
        <NavLink onClick={toggleMenu} to={"/category"}>
          <Box bg={pathname === "/category" ? "#a778d1ff" : "transparent"} color={pathname === "/category" ? "white" : "black"} _hover={{bg: "#a778d1ff", color:"white"}} fontWeight={"bold"}  p={"8px 15px"} rounded={"sm"}>Category</Box>
        </NavLink>

        <NavLink onClick={toggleMenu} to={"/search"}>
          <Box  bg={pathname === "/search" ? "#a778d1ff" : "transparent"} color={pathname === "/search" ? "white" : "black"} _hover={{bg: "#a778d1ff", color:"white"}} fontWeight={"bold"}  p={"8px 15px"} rounded={"sm"}>Search</Box>
        </NavLink>



        {isNavOpen && <Button onClick={toggleLoggedIn} ml={{base:"0px",  md:"10px"}} mr={{base:"0px",  md:"20px"}} fontWeight={"bold"} border={"1px solid black"}  p={"12px 20px"} rounded={"sm"} >
        {isLoggedIn? "Logout" : "Login"}
      </Button> }
      
      </ Stack>
      {!isNavOpen &&
      <Button display={{base:"none", md:"block"}} onClick={toggleLoggedIn} mr={"10px"} fontWeight={"bold"} border={"1px solid black"} ml={"10px"} p={"8px 18px"} rounded={"sm"} >
        {isLoggedIn? "Logout" : "Login"}
      </Button> }


    </Flex>
  );
}
