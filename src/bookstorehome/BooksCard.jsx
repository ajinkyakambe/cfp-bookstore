import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookImage from '../assets/bookimages/Image 14.png'

export {BooksCard}

function BooksCard() {
  return (
    <Card sx={{ maxWidth: 230 }}>
      <CardMedia
        component="img"
        height="140"
        image="http://localhost:3000/Image%2020@2x.png"
        alt="book item"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          Don't make me thing
        </Typography>
        <Typography variant="body4" color="text.secondary">
          by Stevn Mark
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ border: '1px #9D9D9D solid'}} size="small">ADD TO BAG</Button>
        <Button sx={{ border: '1px #9D9D9D solid'}} size="small">WISHLIST</Button>
      </CardActions>
    </Card>
  );
}
