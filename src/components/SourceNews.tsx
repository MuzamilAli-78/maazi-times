import {  Separator,  SimpleGrid} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import axios from "axios";
import SideNews from "./SourceCard";

interface sourceData {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string[];
  total_article: string;
  icon: string;
}



export default function Sources() {
  const [articles, setArticles] = useState<sourceData[]>([]);


  const fetchArticles = async () => {
    const res = await axios.get(
      `https://newsdata.io/api/1/sources?apikey=pub_61416fdb92d84ea094f38bd2d3156920&language=en`
    );
    const data = await res.data;

    setArticles(data.results);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (


      <SimpleGrid
        minChildWidth={{ base: "260px", md: "300px" }}
        gap={10}
        m={"30px"}
      >
        {articles.slice(0, 5).map((source: sourceData) => (
          <>
          <SideNews
            key={source.id}
            id={source.id}
            name={source.name}
            url={source.url}
            description={source.description}
            category={source.category}
            icon={source.icon}
            />
            <Separator display={{base:"none", md:"block"}}></Separator>
            </>
        ))}
      </SimpleGrid>
   
  );
}
