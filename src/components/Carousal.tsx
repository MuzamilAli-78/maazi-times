import { Box, useBreakpointValue, Button} from '@chakra-ui/react'
import { useState } from 'react'
import Slider from 'react-slick'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import CarousalCard from './CarousalCard'

interface NewsData {
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

const settings = {
  
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}


export default function Carousel({ articles }: { articles: NewsData[] }) {
  const [slider, setSlider] = useState<Slider | null>(null)
  const top = useBreakpointValue({ base: '85%', md: '50%' })
  const side = useBreakpointValue({ base: '10px', md: '40px' })
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box position={'relative'} width={'full'} overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

    {!isMobile && <>
    <Button
    aria-label="left-arrow"
    variant="ghost"
    position="absolute"
    left={side}
    top={top}
    transform="translate(0%, -50%)"
    zIndex={2}
    bg={{base:"black",md:"rgba(255, 255, 255, 0.15)"}} 
    ml={{base:"90px",md:"0px"}}
    backdropFilter= 'blur(4px)'
    borderRadius= 'full'
    _hover =  {{bg : 'rgba(255, 255, 255, 0.25)'}}
    onClick={() => slider?.slickPrev()}
    >
    <FaArrowAltCircleLeft color="white" size={24} />
    </Button>
 

    <Button
    aria-label="right-arrow"
    variant="ghost"
    position="absolute"
    right={side}
    top={top}
    transform="translate(0%, -50%)"
    zIndex={2}
    bg={{base:"black",md:"rgba(255, 255, 255, 0.15)"}} 
    mr={{base:"90px",md:"0px"}}
    backdropFilter= 'blur(4px)'
    borderRadius= 'full'
    _hover =  {{bg : 'rgba(255, 255, 255, 0.25)'}}
    onClick={() => slider?.slickNext()}
    >
    <FaArrowAltCircleRight color="white" size={24} />
    </Button> 
    </>}

      
      <Slider {...settings} ref={(s) => setSlider(s)}>
        {articles.map((article) => (
          <CarousalCard
            key={article.article_id}
            article_id={article.article_id}
            image_url={article.image_url}
            title={article.title}
            pubDate={article.pubDate}
            source_name={article.source_name}
            source_icon={article.source_icon}
            description={article.description}
          />
        ))}
      </Slider>
    </Box>
  )
}
