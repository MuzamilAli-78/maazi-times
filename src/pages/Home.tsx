import { useEffect } from "react";
import {
  Separator,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Spinner,
  Box,
  Flex,
  Center,
} from "@chakra-ui/react";

import Carousal from "../components/Carousal" 

import { useDispatch, useSelector } from "react-redux";
import { fetchLatestNews } from "../redux/features/news/newsSlice";
import type { RootState, AppDispatch } from "../redux/store";

import ArticleCard from "../components/ArticleCard";
import FeatureCard from "@/components/FeatureCard";

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
    
      <Heading
        display={"flex"}
        justifyContent={"center"}
        textAlign={"center"}
        as={"h1"}
        my={"30px"}
        fontSize={{base:"2xl",md:"4xl"}}
        fontWeight={"bold"}
        color={"red"}
      >
        News Headlines 
      </Heading>

      <Carousal articles={articles} />

      <Box mt={"25px"} ml={"20px"} display={"flex"} fontSize={{base:"sm", md:"lg"}} fontWeight={"bold"} 
          justifyContent={"center"} alignItems={"center"} textAlign={"center"} h={{base:"30px", md:"40px"}} w={{base:"120px", md:"160px"}} bg={"red"} color={"white"}>

      <Text >Featured News</Text>
      </Box>
      <Separator
        ml={"20px"}
        mb={6}
        w={{base:"87%", md:"97%"}}
        border={"1px solid black"}
        color={"black"}
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
      </Flex>
   
      <Box mt={"25px"} ml={"20px"} display={"flex"} fontSize={{base:"sm", md:"lg"}} fontWeight={"bold"} 
          justifyContent={"center"} alignItems={"center"} textAlign={"center"} h={{base:"30px", md:"40px"}} w={{base:"120px", md:"160px"}} bg={"red"} color={"white"}>

      <Text >Top Stories</Text>
      </Box>
      <Separator
        ml={"20px"}
        mb={6}
        w={{base:"87%", md:"97%"}}
        border={"1px solid black"}
        color={"black"}
      ></Separator>

      <SimpleGrid
        minChildWidth={{ base: "260px", md: "300px" }}
        gap={10}
        m={"30px"}
      >
        {articles.map((news: newsData, index) => (
          <ArticleCard
            key={index}
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
      </SimpleGrid>

      {status === "loading" && articles.length > 0 ? (
        <Spinner size="lg" color="teal.500" mx="auto" display="block" mb={10} />
      ) : (
        nextPage && (

          <Center>
            
                <Button onClick={handleLoadMore} mx={"auto"} mb={"30px"} fontWeight={"bold"} border={"1px solid black"} p={"15px 25px"} rounded={"sm"} >
                  Load More
                </Button> 
          </Center>

          
        )
      )}
    </>
  );
}
