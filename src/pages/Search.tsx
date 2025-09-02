import {   Input, Heading, SimpleGrid, Spinner, Stack } from "@chakra-ui/react"
import { useEffect, useState  } from "react"
import axios from "axios"
import { Outlet } from "react-router-dom";
import BlankCard from "@/components/BlankCard"
import FeatureCard from "@/components/FeatureCard"

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

      <Stack alignItems={"center"}>
       <Heading
        display={"flex"}
        justifyContent={"center"}
        textAlign={"center"}
        as={"h1"}
        mt={"30px"}
        fontSize={"4xl"}
        fontWeight={"bold"}
        color={"#black"}
      >
        Search News
      </Heading>
      
        <Input border={"1px solid black"} width={"70%"} m={"30px"} p={"10px"} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles..." ></Input>
   
      </Stack>

      {loading && <Spinner size="lg" color="teal.500" mx="auto" display="block" mb={10} />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && articles.length === 0 && debouncedQuery && <BlankCard description={"We couldn't find any news articles related to your query. Please try a different one."} />}


      <Outlet />
        <SimpleGrid minChildWidth={{base:"260px" ,md:"300px"}} gap={10} m={"30px"} >
            {articles.map((news:newsData,index) =>(
                <FeatureCard
                key={index}
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

    </div>
  )
}

