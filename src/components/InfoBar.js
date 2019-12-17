import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IoLogoFacebook } from "react-icons/io";
import { maxHeight } from "@material-ui/system";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    marginTop: "30px",
    marginRight:"25px",
    display:"inline-block"
    
  },
  media: {
    height: 150
  },
  button: {
    alignItems: "center"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
   const {id , name, imgsrc, description}=props.locations;
  const selectItem=props.selectItem;
 
 
  return (
   
   <Card onClick={()=> selectItem(id)} className={classes.card} position="static">
     
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgsrc}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.button}
          size="small"
          color="primary"
          href="https://www.facebook.com/LittleHanoiBistro/"
          target="_blank"
        >
          <IoLogoFacebook fontSize="large" />
          Facebook Page
        </Button>
        <Button size="small" color="primary"></Button>
      </CardActions>
    </Card>
  );
}
