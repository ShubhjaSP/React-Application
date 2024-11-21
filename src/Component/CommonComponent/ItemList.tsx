import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, Button, Card, CardContent, CardMedia, Grid, Typography, Slider, TextField, Checkbox, FormControlLabel } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types';
import { addToCart, removeFromCart } from '../../Redux/action';

export const ItemList: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.CartReducer.item);
  const navigate = useNavigate();

  const [priceRange, setPriceRange] = useState<number[]>([0, 20]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNames, setSelectedNames] = useState<string[]>([]); // For checkbox filtering

  const products: Product[] = [


    // { id: 1, name: 'Gift', price: 10, imageUrl: 'https://media.istockphoto.com/id/1383842766/photo/gift-image-for-fathers-day-and-men.jpg?s=612x612&w=0&k=20&c=XybjzkgBqbI5_hnmHifBhMw3nfGrLyuoAjNclQbrnww=', },
    // { id: 2, name: 'ChildArt', price: 15, imageUrl: 'https://media.istockphoto.com/id/1168454133/photo/children-doing-autumn-handcrafts.jpg?s=612x612&w=0&k=20&c=xDemb3AvoGF3tWTdDkcOwBAQxCPhWC9mHl5pKjeYVMo=', },
    // { id: 3, name: 'PaperArt', price: 20, imageUrl: 'https://media.istockphoto.com/id/1156779705/vector/paper-art-style-of-balloons-colorful-color-floating-in-air-blue-sky-background-creative.jpg?s=612x612&w=0&k=20&c=QOW2DLwWZSwqK-C9QUV1fuSTb20rhn8Jy9H0bjeQR-M=', },
    // { id: 4, name: 'Painting', price: 10, imageUrl: 'https://media.istockphoto.com/id/542321570/vector/oil-painting-field-of-daisies-colorfull-art-drawing.jpg?s=612x612&w=0&k=20&c=2_PCtv77ugNeGO_55pXnce491WoLGAT9Y1seveek_MU=},
    // { id: 5, name: 'Gift', price: 10, imageUrl: 'https://media.istockphoto.com/id/1332102612/vector/merry-new-year-and-merry-christmas-2022-white-gift-boxes-with-golden-bows-and-gold-sequins.jpg?s=612x612&w=0&k=20&c=zMAhHLPrPn5Z33ZmY4AMpjDxsfc8lceHeNTS7WLmVlw=' },
    // { id: 6, name: 'Quillings', price: 10, imageUrl: 'https://media.istockphoto.com/id/1396433122/photo/quilling-paper-curls-and-rolls-banner-in-an-abstract-panel-with-copy-space-filigree-paper.jpg?s=612x612&w=0&k=20&c=P5k9srRgklXYVdwiPQqZG_qjMtr6ia2-5rFUeEO0xVI='},
 
    { id: 1, name: 'Gift', price: 10, imageUrl: 'https://media.istockphoto.com/id/1383842766/photo/gift-image-for-fathers-day-and-men.jpg?s=612x612&w=0&k=20&c=XybjzkgBqbI5_hnmHifBhMw3nfGrLyuoAjNclQbrnww=', },
    { id: 2, name: 'ChildArt', price: 15, imageUrl: 'https://media.istockphoto.com/id/1168454133/photo/children-doing-autumn-handcrafts.jpg?s=612x612&w=0&k=20&c=xDemb3AvoGF3tWTdDkcOwBAQxCPhWC9mHl5pKjeYVMo=', },
    { id: 3, name: 'PaperArt', price: 20, imageUrl: 'https://media.istockphoto.com/id/1156779705/vector/paper-art-style-of-balloons-colorful-color-floating-in-air-blue-sky-background-creative.jpg?s=612x612&w=0&k=20&c=QOW2DLwWZSwqK-C9QUV1fuSTb20rhn8Jy9H0bjeQR-M=', },
    { id: 4, name: 'Painting', price: 5, imageUrl: 'https://media.istockphoto.com/id/542321570/vector/oil-painting-field-of-daisies-colorfull-art-drawing.jpg?s=612x612&w=0&k=20&c=2_PCtv77ugNeGO_55pXnce491WoLGAT9Y1seveek_MU=', },
    { id: 5, name: 'Gift', price: 45, imageUrl: 'https://media.istockphoto.com/id/1332102612/vector/merry-new-year-and-merry-christmas-2022-white-gift-boxes-with-golden-bows-and-gold-sequins.jpg?s=612x612&w=0&k=20&c=zMAhHLPrPn5Z33ZmY4AMpjDxsfc8lceHeNTS7WLmVlw=', },
    { id: 6, name: 'Quillings', price: 40, imageUrl: 'https://media.istockphoto.com/id/1396433122/photo/quilling-paper-curls-and-rolls-banner-in-an-abstract-panel-with-copy-space-filigree-paper.jpg?s=612x612&w=0&k=20&c=P5k9srRgklXYVdwiPQqZG_qjMtr6ia2-5rFUeEO0xVI=', },
 
    
 
  ];

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total: number, product: any) => total + product.quantity, 0);
  };

  const handleCartClick = () => {
    navigate('/product');
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    if (event.target.checked) {
      setSelectedNames([...selectedNames, name]);
    } else {
      setSelectedNames(selectedNames.filter((n) => n !== name));
    }
  };

  const filteredProducts = products.filter(product =>
    product.price >= priceRange[0] &&
    product.price <= priceRange[1] &&
    (selectedNames.length === 0 || selectedNames.includes(product.name)) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box sx={{
        backgroundImage: `url('https://media.istockphoto.com/id/1452069418/photo/stylish-beige-display-stand-stock-background.jpg?s=612x612&w=0&k=20&c=vfMMkK5cyVvTDrIZ6pZgFX056B-h6jvbBxle45dHdTg=')`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '30px',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <Grid container spacing={2} marginTop={2}>
          {/* Filter Section */}
          <Grid item xs={12} sm={3}>
            <Box sx={{
              padding: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 3,
              boxShadow: 3,
            }}>
              {/* Price Filter Slider */}
              <Typography variant="h6" gutterBottom  sx={{ marginTop: 4 }}>Filter by Price</Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={50}
                sx={{ width: '80%' }}
              />
              <Typography variant="body2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </Typography>

              {/* Search Filter by Name */}
              <Typography variant="h6" gutterBottom sx={{ marginTop: 6 }}>Search Products</Typography>
              <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{ marginBottom: 2 }}
              />

              {/* Checkboxes for Filtering by Product Name */}
              <Typography variant="h6" gutterBottom >Filter by Category</Typography>
              {['Gift', 'childArt', 'PaperArt'].map((name) => (
                <FormControlLabel
                  key={name}
                  control={
                    <Checkbox
                      checked={selectedNames.includes(name)}
                      onChange={(event) => handleNameChange(event, name)}
                    />
                  }
                  label={name}
                />
              ))}
            </Box>
          </Grid>

          {/* Product Section */}
          <Grid item xs={12} sm={9}>
            <Grid container spacing={2}>
              {filteredProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card sx={{
                    width: '100%',
                    borderRadius: 3,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    backgroundColor: 'white',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 6,
                    },
                    transition: 'all 0.3s ease',
                  }}>
                    <CardMedia
                      component="img"
                      sx={{
                        height: 200,
                        objectFit: 'cover',
                      }}
                      image={product.imageUrl}
                      alt={product.name}
                    />
                    <CardContent sx={{
                      padding: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
                      <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price: ${product.price}
                      </Typography>
                    </CardContent>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      padding: 2,
                      backgroundColor: '#f7f7f7',
                    }}>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginRight: 1 }}
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        Remove
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Cart Icon */}
      <Box sx={{
        position: 'fixed',
        top: '10%',
        right: '5%',
        fontSize: '24px',
        zIndex: 1000,
      }}>
        <Badge badgeContent={getTotalItems()} color="secondary" sx={{ fontSize: '32px' }}>
          <ShoppingCartIcon sx={{ fontSize: '32px', cursor: 'pointer' }} onClick={handleCartClick} />
        </Badge>
      </Box>
    </>
  );
};
