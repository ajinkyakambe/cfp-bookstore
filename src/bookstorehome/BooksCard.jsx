import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';

export {BooksCard}


const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: '#9D9D9D',
    maxWidth: 235,
    fontSize: theme.typography.pxToRem(11),
    border: '1px solid #E2E2E2',
  },
}));


function BooksCard(props) {
  
  // Base url for image display

  const BASEURL = "http://localhost:3000/bookimages/"

 
 
  const isOpen = props.singleBookDataForDisplaying.bookQuantity>0 ? true : false;
 


  return (

  


    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="#0A0102">Book Details</Typography>
           {props.singleBookDataForDisplaying.bookDescription}
          </React.Fragment>
        }
      >


    <Card id={props.singleBookDataForDisplaying.bookId} sx={{ 'text-align': 'left' }}>
      
      <CardMedia
        component="img"
        height="140"
        image={BASEURL+props.singleBookDataForDisplaying.bookLogo}
        alt="book item"
        
      />
      <CardContent>
      

        <Typography  variant="h6" component="div" sx={{'font-size':'14px','font-weight': '600','line-height': '1.3'}}>
          {props.singleBookDataForDisplaying.bookName}
        </Typography>
        <Typography variant="body4" color="text.secondary" sx={{'font-size':'9px'}} >
          by {props.singleBookDataForDisplaying.bookAuthor}
        </Typography>


        <Typography  variant="h5" component="div" sx={{'font-size':'12px','font-weight':'bold','margin-top':'4%'}}>
        ₹{props.singleBookDataForDisplaying.bookPrice}
        </Typography>


      </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
        <Button sx={{ border: '1px #9D9D9D solid','color': 'white', 'background-color': '#6f1816'}} size="small">ADD TO BAG</Button>
        <Button  sx={{ border: '1px #9D9D9D solid','color':'#0A0102'}} size="small">WISHLIST</Button>
      </CardActions>
    </Card>

    

    </HtmlTooltip>


   
  );
}
