
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Box, Button } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import CarousalCard from "@/components/CarousalCard";
import BlankCard from "@/components/BlankCard";

export default function ArticleDetails() {
  const { name, articleId } = useParams(); 
  const articles = useSelector((state: RootState) => state.news.articles);
  const navigate = useNavigate();
  
  const article = articles.find(a => a.article_id === articleId);

  if (!article) {
    return <BlankCard description={" We couldn't find any news articles. Please try a different one."} />
  }

    const handleBack = () => {
    navigate(-1); 
  };
  return (
    <>
    
      <Button onClick={handleBack} m={"30px"} fontWeight={"bold"} border={"1px solid black"} p={"8px 18px"} rounded={"sm"} >
       <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back
      </Button> 

      <CarousalCard
            image_url={article.image_url}
            title={article.title}
            pubDate={article.pubDate}
            source_name={article.source_name}
            source_icon={article.source_icon}
            description={article.description} />

    <Box pb={"60px"}>

    </Box>

    </>
  );
}
