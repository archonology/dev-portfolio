import React from "react";
import work from "../work"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const WorkCard = () => {
    return (
        <>
            {work.map((work) => {
                return (
                    <>
                        <Card sx={{ maxWidth: 545 }} className="edCard">
                            <CardMedia
                                component="img"
                                alt={work.employer}
                                height="140"
                                image={work.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3"
                                    style={{ fontSize: '16px' }}
                                    component="div">
                                    {work.title}
                                </Typography>
                                <hr />
                                <Typography>{work.employer} | {work.location} | {work.dates}</Typography>
                                <Typography variant="body2" color="text.secondary" style={{ paddingTop: '.7em' }}>
                                    {work.summary}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Visit Website</Button>
                            </CardActions>
                        </Card>
                    </>
                )
            })}

        </>
    )

}

export default WorkCard;