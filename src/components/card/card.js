import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './card.css';

const Card2 = (props) => {
    const title = 'Cat id';

    return (
        <Card className='card-item'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {`${title}: ${props.id}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default Card2