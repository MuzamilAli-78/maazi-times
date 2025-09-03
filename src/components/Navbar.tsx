import { Flex, Stack, Spacer, IconButton, Button, Box, Image} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useBreakpointValue } from "@chakra-ui/react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


export default function Navbar() {

  const [isNavOpen , setIsNavOpen] = useState(false);
  const {pathname} = useLocation()
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleMenu = ()=>{
    setIsNavOpen(!isNavOpen);
  }

    useEffect(() => {
    if (isNavOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavOpen, isMobile]);

  return (
    <Flex borderBottomWidth={"2px"} as={"nav"} p={"15px 0px 15px 0px"} justifyContent={"centre"} alignItems={"center"} bg={"gray.800"} align={"center"} wrap={"wrap"}>
   
      <Image alt="Logo" ml={"30px"} h={{ base: "30px", md: "30px"}} src="../src/assets/images/logo.png" />

      <Spacer />

      <IconButton onClick={toggleMenu} display={{base:"flex", md:"none"}} alignItems={"centre"} justifyContent={"center"} mr={"10px"}  bg={"none"}>
        {isNavOpen? <FaTimes /> : <FaBars aria-label="ToggleMenu"  />} 
      </IconButton>
      
      <Stack mr={{base:"0px", md:"30px"}} gap={{base:"30px", md: "30px"}} ml={{base:"0px", md:"40px"}} direction={{base:"column", md:"row"}} display={{base:isNavOpen?"flex":"none", md:"flex"}} w={{base:"full", md:"auto"}} h={{base:"100vh", md:"auto"}} justifyContent={"center"} alignItems={"center"} >
   
        <NavLink  onClick={() => { if (isMobile) toggleMenu(); }} to ={"/"} >
          <Box fontFamily={"arial"} bg={pathname === "/" ? "gray.700" : "transparent"} color={pathname === "/" ? "white" : "white"}  _hover={{bg: "gray.700", color:"white"}}  p={"8px 15px"} rounded={"sm"}>Home</Box>
        </NavLink>
 
        <NavLink onClick={() => { if (isMobile) toggleMenu(); }} to={"/category"}>
          <Box fontFamily={"arial"} bg={pathname === "/category" ? "gray.700" : "transparent"} color={pathname === "/category" ? "white" : "white"} _hover={{bg: "gray.700", color:"white"}}   p={"8px 15px"} rounded={"sm"}>Category</Box>
        </NavLink>

        <NavLink onClick={() => { if (isMobile) toggleMenu(); }} to={"/search"}>
          <Box fontFamily={"arial"}  bg={pathname === "/search" ? "gray.700" : "transparent"} color={pathname === "/search" ? "white" : "white"} _hover={{bg: "gray.700", color:"white"}}   p={"8px 15px"} rounded={"sm"}>Search</Box>
        </NavLink>

        <SignedOut>
          <SignInButton mode="modal">
            <Button ml={{ base: "0px", md: "10px" }} _hover={{bg: "gray.800", color:"white"}} fontSize={"sm"} fontFamily={"arial"} mr={{ base: "0px", md: "20px" }} bg={"gray.900"} color={"white"} fontWeight={"bold"} p={"12px 20px"} border={"1px solid white"}>
              LogIn
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton appearance={{ elements: {avatarBox: {width: "40px", height: "40px"}}}} />
        </SignedIn>

      </ Stack>

    </Flex>
  );
}
