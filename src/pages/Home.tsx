import { useEffect } from "react";
import {
  Separator,
  Text,
  Button,
  Spinner,
  Box,
  Flex,
  Center
} from "@chakra-ui/react";

import Carousal from "../components/Carousal" 

import { useDispatch, useSelector } from "react-redux";
import { fetchLatestNews } from "../redux/features/news/newsSlice";
import type { RootState, AppDispatch } from "../redux/store";

import NewsCard from "@/components/NewsCard";

interface newsData {
  article_id: string;
  title: string;
  description: string;
  link: string;
  keywords: string[];
  creator: string[];
  pubDate: string;
  image_url: string;
  source_name: string;
  source_icon: string;
  country: string[];
  category: string[];
}

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { articles, status, error, nextPage } = useSelector(
    (state: RootState) => state.news
  );

  
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLatestNews());
    }
  }, [status, dispatch]);

  if (status === "loading" && articles.length === 0) {
    return <p>Loading...</p>;
  }
  if (status === "failed") return <p>Error: {error}</p>;

  const handleLoadMore = () => {
    if (nextPage) {
      dispatch(fetchLatestNews(nextPage));
    }
  };

  return (
    <>
      <Box h={"100vh"} >

        <Carousal articles={articles} />
      </Box>

      {/* <Box mt={"25px"} ml={"20px"} display={"flex"} fontSize={{base:"sm", md:"lg"}} fontWeight={"bold"} 
          justifyContent={"center"} alignItems={"center"} textAlign={"center"} h={{base:"30px", md:"40px"}} w={{base:"120px", md:"160px"}} bg={"red"} color={"white"}>

      <Text >Featured News</Text>
      </Box>
      <Separator
        ml={"20px"}
        mb={6}
        w={{base:"87%", md:"97%"}}

      ></Separator>


      <Flex
        minWidth={{ base: "250px", md: "300px" }}
        gap={10}
        m={"30px"}
        flexDirection={"row"}
        overflow={'auto'}
        
      >
        {articles.slice(0,9).map((news: newsData) => (
          <FeatureCard
            key={news.article_id}
            article_id={news.article_id}
            title={news.title}
            link={news.link}
            category={news.category}
            pubDate={news.pubDate}
            image_url={news.image_url}
            source_name={news.source_name}
            source_icon={news.source_icon}
          />
        ))}
      </Flex> */}
   
      <Box mt={"25px"} ml={"20px"} display={"flex"} fontSize={{base:"sm", md:"lg"}} fontWeight={"bold"} 
          justifyContent={"center"} alignItems={"center"} textAlign={"center"} h={{base:"30px", md:"40px"}} w={{base:"120px", md:"160px"}} bg={"red"} color={"white"}>

      <Text fontWeight={"semibold"} fontFamily={"arial"} >Top Stories</Text>
      </Box>
      <Separator
        ml={"20px"}
        mb={6}
        w={{base:"87%", md:"97%"}}
   
      ></Separator>

     

      <Flex flexDirection={"column"} >
              {articles.map((news:newsData,index) =>(
                      <NewsCard
                      key={index}
                      title={news.title}
                      link={news.link}
                      description={news.description}
                      pubDate={news.pubDate}
                      image_url={news.image_url}
                      source_name={news.source_name}
                      />
      
                     
                      
                  ))}
              </Flex>

      {status === "loading" && articles.length > 0 ? (
        <Spinner size="lg" color="teal.500" mx="auto" display="block" pb={10} />
      ) : (
        nextPage && (

          <Center mt={"30px"}>
            
                <Button _hover={{bg: "gray.700", color:"white"}} fontSize={"md"} fontFamily={"arial"} bg={"gray.900"} color={"white"} onClick={handleLoadMore} mx={"auto"} mb={"30px"} fontWeight={"bold"} p={"15px 25px"} rounded={"sm"} >
                  Load More
                </Button> 
          </Center>

          
        )
      )}
    </>
  );
}
