import {   Input, Heading, Spinner, Stack, Flex } from "@chakra-ui/react"
import { useEffect, useState  } from "react"
import axios from "axios"
import { Outlet } from "react-router-dom";
import BlankCard from "@/components/BlankCard"
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



export default function Search() {

  const apiKey = import.meta.env.VITE_NewsAPI_KEY;

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [articles, setArticles] = useState <newsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  
  const fetchArticles = async () => {
    if (!debouncedQuery) return;

    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(`https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&removeduplicate=1&q=${debouncedQuery}`);
      const data = await res.data;
     
      setArticles(data.results);
    } catch (err) {
     
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchArticles();
  }, [debouncedQuery]);

  return (
    
    <div className="search-page">

      <Stack mb={"25px"} alignItems={"center"}>
        <Heading display={"flex"} justifyContent={"center"} textAlign={"center"} as={"h1"} mt={"55px"} fontFamily={"arial"} textStyle={{base:"2xl", md:"3xl"}} color={"white"}>
          Search News
        </Heading>
      
        <Input fontFamily={"arial"} rounded={"lg"} fontSize={{ base: "md", md: "md"}} bg={"gray.200"} border={"1px solid white"} width={{base:"80%",md:"60%"}} m={{base:"15px", md:"25px"}} p={{base:"10px",md:"15px"}} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles..." ></Input>
   
      </Stack>

      {loading && <Spinner size="lg" color="teal.500" mx="auto" display="block" mb={10} />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && articles.length === 0 && debouncedQuery && <BlankCard description={"We couldn't find any news articles related to your query. Please try a different one."} />}


      <Outlet />

        <Flex flexDirection={"column"} >
          {articles.map((news:newsData,index) =>(
                  <NewsCard
                  key={index}
                  title={news.title}
                  link={news.link}
                  description={news.description}
                  pubDate={news.pubDate}
                  image_url={news.image_url}
                  />

              ))}
        </Flex>

    </div>
  )
}

