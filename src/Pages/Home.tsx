import React from "react";
import { Typography, ImageList, Container, ImageListItem, IconButton, ImageListItemBar } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import InfoIcon from '@mui/material/Icon';
import { Link, useParams } from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from "../Context/dataContext";
import { JsxElement } from "typescript";

interface Movie {
  id: number,
  
}


export default function Home() {

  const { id } = useParams();

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
      console.log(response.data.results)
      setData(response.data.results)
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
      {data.map((img: any) => (
        <ImageListItem key={img.img}>
          
          <Link to={`Movie/${img.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${img.poster_path}`}
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


