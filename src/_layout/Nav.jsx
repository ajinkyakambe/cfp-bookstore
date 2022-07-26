import  React,{useEffect,useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import CartService from '../_services/CartService'


export {Nav}


// Logic of Component using the theme

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    color:'black',
    border: `1px solid #2E1D1E`,
    backgroundColor: '#FAFAFA',
    padding: '0 4px',
  },
}));



function Nav({isLogin}) {


  console.log("Nav login info ",isLogin);



/**
  |--------------------------------------------------
  | Cart Counter global
  |--------------------------------------------------
  */

  const [cartCount, setCartCount] = useState(0);

  //Count the cart element
  const  countCart = async () => {
    let cart = await CartService
    .getAllBookInCart()
    .then((response)=>{
      return response.data.data;
    });

    

    let counter = cart.length;
    setCartCount(counter)
  }


   useEffect(
    ()=> {
      countCart();
    })

   console.log("cartCount is ",cartCount);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#A03037'}}>
      <Container maxWidth="md"> 
        <Toolbar disableGutters>      
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
          
          <AutoStoriesIcon />  Bookstore
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <IconButton component={Link} to={'/cart'} aria-label="cart" >
            <StyledBadge badgeContent={isLogin? cartCount : '0'} >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>

        </Toolbar>
        
        </Container>
      </AppBar>
     
    </Box>
  );
}

