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
                        <Card className="edCard" style={{padding: '1em'}}>
                            {/* <CardMedia
                                component="img"
                                alt={school.institution}
                                height="140"
                                image={school.image}
                            /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h3"
                                    style={{ fontSize: '20px', fontWeight: '700' }}
                                    component="div">
                                    {school.award}
                                </Typography>
                                <hr />
                                <Typography style={{ fontSize: '17px', marginTop: '.5em' }}>{school.institution} | {school.dates}</Typography>
                                <Typography variant="body2" style={{ paddingTop: '.7em', fontSize: '16px' }}>
                                    {school.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href={school.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    size="medium">Visit Program Page
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