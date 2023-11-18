import React from "react";
import education from '../education';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const EducationCard = () => {
    return (
        <>
            {education.map((school) => {
                return (
                    <>
                        <Card className="edCard">
                            <CardMedia
                                component="img"
                                alt={school.institution}
                                height="140"
                                image={school.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3"
                                    style={{ fontSize: '16px' }}
                                    component="div">
                                    {school.award}
                                </Typography>
                                <hr />
                                <Typography>{school.institution} | {school.dates}</Typography>
                                <Typography variant="body2" color="text.secondary" style={{ paddingTop: '.7em' }}>
                                    {school.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href={school.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    size="small">Visit Program Page
                                </Button>
                                <Button
                                    href={school.certificate}
                                    target="_blank"
                                    rel="noreferrer"
                                    size="small">{school.certificateTitle}</Button>
                            </CardActions>
                        </Card>
                    </>
                )
            })}

        </>
    )

}

export default EducationCard;