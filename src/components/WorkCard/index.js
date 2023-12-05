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
                        <Card className="edCard">
                            <CardContent>
                                <Typography gutterBottom variant="h3"
                                    style={{ fontSize: '20px', fontWeight: 700 }}
                                    component="div">
                                    {work.title}
                                </Typography>
                                <hr />
                                <Typography style={{ fontSize: '17px', marginTop: '.5em' }}>{work.employer} | {work.location} | {work.dates}</Typography>
                                <Typography variant="body2" style={{ paddingTop: '.7em', paddingBottom: '1em', fontSize: '16px' }}>
                                    {work.summary}
                                </Typography>
                                <h6 style={{ fontSize: '17px' }}>Accomplishments:</h6>
                                <ul style={{ fontSize: '16px' }}>
                                    {work.accomplishments.map((each) => {
                                        return (
                                            <li>{each}
                                            </li>
                                        )
                                    })}
                                    <br />
                                </ul>
                                <h6 style={{ fontSize: '17px' }}>Skills:</h6>
                                <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{work.skills}</p>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href={work.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    
                                    size="large">Visit
                                </Button>
                            </CardActions>
                        </Card>
                    </>
                )
            })}

        </>
    )

}

export default WorkCard;