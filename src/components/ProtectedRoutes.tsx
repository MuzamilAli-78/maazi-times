import { Box, Text, Button, Flex} from "@chakra-ui/react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import type { ReactNode } from "react";

export default function ProtectedRoutes({ children }: { children: ReactNode }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>

      <SignedOut>
    
        <Box position="fixed" bottom={0} left={0} width="100vw" height="100vh" backgroundImage="url('src/assets/images/sample_img.jpg')" backgroundSize="cover" backgroundPosition="center" zIndex={-1} />
        <Box position="fixed" bottom={0} left={0} width="100vw" height="100vh" bg="rgba(0, 0, 0, 0.5)" zIndex={0} />

       
        <Flex position="relative" zIndex={1} height="100vh" align="center" justify="center" direction="column" px={4}>

          <Text mb={6} color="white" fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight="bold" textAlign="center">
            Kindly Sign In to View Details
          </Text>

          <Button fontSize="lg" fontWeight="bold" color="black" bg="white" px={8} py={6} _hover={{ bg: "gray.100" }} >
            <SignInButton />
          </Button>
        </Flex>
        
      </SignedOut>
    </>
  );
}
