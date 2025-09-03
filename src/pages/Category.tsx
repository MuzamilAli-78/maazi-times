import { Box, Center, createListCollection, Heading, Portal, Select, Separator, SimpleGrid, Text } from "@chakra-ui/react";
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
import NewsCard from "@/components/NewsCard";



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

interface filteredData  {
  category: string;
  articles: newsData[];
  
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

const NewsCategories = [
  "Business",
  "Crime",
  "Domestic",
  "Education",
  "Entertainment",
  "Environment",
  "Food",
  "Health",
  "Lifestyle",
  "Politics",
  "Science",
  "Sports",
  "Technology",
  "Top",
  "Tourism",
  "World",
  "Other",
];

export default function Category() {
  
  const { name, articleId } = useParams(); 
  const navigate = useNavigate();


  const [value, setValue] = useState<string[]>([])


  const dispatch = useDispatch<AppDispatch>();
  const { articles, status } = useSelector((state: RootState) => state.news);

   const filteredByCategory: filteredData[] = NewsCategories.map((cat) => {
      const filteredArticles = articles.filter((item) =>
        item.category.some((c) => c.toLowerCase() === cat.toLowerCase())
      );

      if (filteredArticles.length > 0) {
        return { category: cat, articles: filteredArticles }; 
      }
      return null;
  }).filter(Boolean) as filteredData[];



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

<Center>
  {!name ?
        <Heading display={"flex"} justifyContent={"center"} textAlign={"center"} as={"h1"} my={{base:"30px", md:"45px"}} fontFamily={"arial"} textStyle={{base:"2xl", md:"3xl"}} color={"white"}>
          Please select a category to view articles.
        </Heading>:
                   <Heading display={"flex"} justifyContent={"center"} textAlign={"center"} as={"h1"} my={{base:"30px", md:"45px"}} fontFamily={"arial"} textStyle={{base:"2xl", md:"3xl"}} color={"white"}>
         {name.charAt(0).toUpperCase() + name.slice(1)}
        </Heading>}   
         
</Center>
<Center>
  
    <Select.Root
           
            collection={categories}
            width={{base:"220px", md:"580px" , lg:"680px"}}
            value={value}
            onValueChange={(e) => handleCategorySelect(e.value)}
            mb={{base:"30px", md:"55px"}}
            >
            <Select.HiddenSelect />
            <Select.Control >
              <Select.Trigger  p={"10px"}>
                <Select.ValueText fontFamily={"arial"} color={"white"} placeholder="Select category" />
              </Select.Trigger>
              <Select.IndicatorGroup color={"white"} pr={"20px"}>
                <Select.Indicator  color={"white"} />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content fontFamily={"arial"} p={"15px"}>
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
              </Center>

      <Outlet />


      {!articleId && <>
        <Grid templateColumns={"repeat(7, 1fr)"}>
          <GridItem as={"main"} colSpan={{ base: 7, md: 5 }} p={" 20px"}>

    <SimpleGrid minChildWidth={{ base: "260px", md: "300px" }} gap={10} m={"30px"}>
      {filteredArticles && 
        filteredArticles.map((news: newsData) => (
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


      {filteredArticles.length === 0 && 
        <BlankCard description={" We couldn't find any news articles in this category. Please try a different one."} /> }
    </SimpleGrid>


          </GridItem>
          
          
          
          
          
          
          <GridItem as={"aside"} colSpan={{ base: 7, md: 7, lg: 2 }} p={{ base: "20px", lg: "10px" }} borderTopWidth={{base:"6px", md:"0px"}} 
                  mx={{base:"8px", md:"0px"}} borderLeftWidth={{base:"0px", md:"8px"}} rounded={"md"} borderColor={"gray.400"} mb={"30px"}>
                
                <Heading fontFamily={"arial"}  display={"flex"} justifyContent={"center"} textAlign={"center"} as={"h1"} fontSize={"4xl"} fontWeight={"bold"} color={"white"}>
                  Additional Sources
                </Heading>
           

                <Sources />

             
          </GridItem>

        </Grid>

        

</>}

              
      <Separator w={"full"} border={"1px solid gray.400"}></Separator>
     
         


      {filteredByCategory.map((data) => (
        <div key={data.category}>
          <Box display={"flex"} fontSize={{base:"sm", md:"lg"}} fontWeight={"bold"} justifyContent={"center"} alignItems={"center"} 
              textAlign={"center"} h={{base:"30px", md:"40px"}} w={{base:"120px", md:"160px"}} bg={"red.700"} color={"white"}>
    
            <Text fontFamily={"arial"} >{data.category.charAt(0).toUpperCase() + data.category.slice(1)}</Text>
          </Box>
                   

          {data.articles.slice(0, 5).map((news:newsData,index) =>(
                        <NewsCard
                            key={index}
                            title={news.title}
                            link={news.link}
                            description={news.description}
                            pubDate={news.pubDate}
                            image_url={news.image_url}
                        />
                      

                    ))}
    
  </div>
))}





     
</>
  );
}




