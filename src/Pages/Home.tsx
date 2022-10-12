import React from "react";
import { Typography, ImageList, Container, ImageListItem, IconButton, ImageListItemBar } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import InfoIcon from '@mui/material/Icon';
import { Link } from 'react-router-dom';

export default function Home() {

  const [data, setData] = useState<any>([])

  function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  useEffect(()=> {
    const fetch = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=50d62c3a62fadc7eac2aaccfaedfa111')
      setData(response.data)
    }
    fetch()
  }, [])

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                background: 'black',
                width: '100%'
            }}
        >
            <Typography
                variant='h3'
                sx={{
                    color: 'white',
                    marginTop: 2,
                    marginBottom: 2
                }}
            >
                Tendencias
            </Typography>
            
            <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem cols={2}>
      </ImageListItem>
      {itemData.map((img: any) => (
        <ImageListItem key={img.img}>
          <Link to={`Movie/${img.id}`}>
              <img
                src={`${img.img}?w=248&fit=crop&auto=format`}
                alt={img.title}
                loading="lazy"
              />
          </Link>
         
          <ImageListItemBar
            title={img.title}
            subtitle={img.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${img.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
                     
        </Container>
    );
};


const itemData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Inocente',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    id: 11,
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    id: 12,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

