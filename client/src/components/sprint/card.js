import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import useStylesCard from './stylesCard';

export default function SprintCard(props) {
  const classes = useStylesCard();

  return (
    <Card className={`${classes.root}`} width={1}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={props.link}>
            <Button size="large" color="secundary" className={classes.button}>
            ¡Vamos!
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}