import { createListCollection, Flex, Heading, Portal, Select, Separator, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import type { RootState, AppDispatch } from '../redux/store'
import { Outlet } from "react-router-dom"; 

import ArticleCard from "../components/ArticleCard";
import { useEffect, useState } from "react";


import { useDispatch } from "react-redux";
import { fetchLatestNews } from "../redux/features/news/newsSlice"; 
import Sources from "../components/SourceNews";
import BlankCard from "@/components/BlankCard";


interface newsData  {
  article_id: string;
  title: string;
  description: string;
  link: string;
  keywords: string[];
  creator:  string[];
  pubDate: string;
  image_url: string;
  source_name: string;
  source_icon: string;
  country: string[];
  category: string[];
};

const categories = createListCollection({
  items: [
    { label: "Business", value: "business" },
    { label: "Crime", value: "crime" },
    { label: "Domestic", value: "domestic" },
    { label: "Education", value: "education" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Environment", value: "environment" },
    { label: "Food", value: "food" },
    { label: "Health", value: "health" },
    { label: "Lifestyle", value: "lifestyle" },
    { label: "Politics", value: "politics" },
    { label: "Science", value: "science" },
    { label: "Sports", value: "sports" },
    { label: "Technology", value: "technology" },
    { label: "Top", value: "top" },
    { label: "Tourism", value: "tourism" },
    { label: "World", value: "world" },
    { label: "Other", value: "other" },
  ],
});



export default function Category() {
  
  const { name, articleId } = useParams(); 
  const navigate = useNavigate();


  const [value, setValue] = useState<string[]>([])


  const dispatch = useDispatch<AppDispatch>();
  const { articles, status } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLatestNews());
    }
  }, [status, dispatch]);




  
      const filteredArticles = articles.filter((article: newsData) =>
  article.category.includes(name || "")
);

const handleCategorySelect = (selectedValue: string[]) => {
    setValue(selectedValue);
    console.log(selectedValue, "SelectedValue")
    const category = selectedValue[0]; 
    if (category) {
      navigate(`/category/${category}`);
    }
  };

  return (
<>

    {articleId ? "" :
    <Heading display={"flex"} justifyContent={"center"} textAlign={"center"} as={"h1"} mb={"30px"} mt={"30px"} fontSize={"4xl"} fontWeight={"bold"} color={"#black"}>
        Top Categories
      </Heading>
    }

      <Outlet />

      {!articleId && (
        <Grid templateColumns={"repeat(7, 1fr)"}>
          <GridItem as={"main"} colSpan={{ base: 7, lg: 5 }} p={" 20px"}>

<Separator border={"1px solid black"} mb={"10px"} />

          <Flex   alignItems={"center"} justifyContent={"center"} >
                <Heading fontSize={{base:"sm", md:"xl"}} fontWeight="bold">
                  Selected Category :{" "}
                  <Text display={{base:"none", md:"block"}} fontWeight={"bold"}  color="#a375cbff" textTransform="capitalize">
                    {name || "Not Selected"}
                  </Text>
                </Heading>

      <Spacer />
  
      <Select.Root
            mr={"30px"}
            collection={categories}
            width={{base:"120px", md:"280px"}}
            value={value}
            onValueChange={(e) => handleCategorySelect(e.value)}
            
            >
            <Select.HiddenSelect />
            <Select.Control >
              <Select.Trigger pl={"10px"}>
                <Select.ValueText placeholder="Select category" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content p={"15px"}>
                  {categories.items.map((category) => (
                    <Select.Item item={category} key={category.value}>
                      {category.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>

 
                  </Flex>
<Separator border={"1px solid black"} my={"10px"} />

            {!name && (
              <Text mt={"35px"} textAlign="center" fontSize="xl">
                Please select a category to view articles.
              </Text>
            )}

            <SimpleGrid
              minChildWidth={{ base: "260px", md: "300px" }}
              gap={10}
              m={"30px"}
            >
              {filteredArticles && filteredArticles.map((news: newsData) => (
                <ArticleCard 
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
              ))  
            }
          {filteredArticles.length === 0 && <BlankCard description={" We couldn't find any news articles in this category. Please try a different one."} /> }
            </SimpleGrid>
          </GridItem>

          <GridItem as={"aside"} colSpan={{ base: 7, lg: 2 }} p={{ base: "20px", lg: "10px" }} borderTopWidth={{base:"8px", md:"0px"}} 
              mx={{base:"8px", md:"0px"}} borderLeftWidth={{base:"0px", md:"8px"}} rounded={"md"} borderColor={"#c48cf5"} mb={"30px"}>
                
                <Heading display={"flex"} justifyContent={"center"} textAlign={"center"} as={"h1"} fontSize={"4xl"} fontWeight={"bold"} color={"#black"}>
                  Additional Sources
                </Heading>

                <Sources />

          </GridItem>

        </Grid>
)}

     

       
     





     
</>
  );
}




