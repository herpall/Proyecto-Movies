import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Box, CardHeader, Container, imageListClasses } from '@mui/material';
import { useParams } from 'react-router-dom';
import { setEnvironmentData } from 'worker_threads';



export default function Movie() {

  const { id } = useParams();

  const [movie, setMovie] = useState<any>([])


  useEffect(()=> {
    const fetch = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=50d62c3a62fadc7eac2aaccfaedfa111&language=en-US`)
      console.log(response.data)
      setMovie(response.data)
    }
    fetch()
  }, [])

  
    

  return (
    <Container sx={{
                    background: 'black',
                    width: '100%',
                    padding: 10
                    }}>

      <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: 'auto',
    
          }}>               
        
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 440 }}
            image={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            title={movie?.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie?.overview}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Watch the trailer!</Button>
          </CardActions>
        </Card>

      </Box>

    </Container>
    

  );
}

