import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import barritaOriginal from '../components/imgs/barra-agtal-original.jpg';



export const ItemDetail = () => {
    const styles = {
        container: {
          
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "top",
          marginLeft: 250,
          marginRight: 250,
          marginTop: 50,
          marginBottom: 100,          
          backgroundColor: "white", 
        },
        cardContent: {
            flexDirection: "column",
            width: 500,
            height: 600,
        }
      };
      
     
        return(
          <Card sx={{ maxWidth: 1200 }} style={styles.container}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                width = "350"
                image = {barritaOriginal}
                alt="producto 1"
              />
              
            </CardActionArea>
            <CardActions>
            <CardContent style={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  Producto 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Descripción del producto. 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  $1.000
                </Typography>
                <Button size="small" color="primary">
                Agregar al carrito
              </Button>
              </CardContent>
            </CardActions>
          </Card>
        );
};