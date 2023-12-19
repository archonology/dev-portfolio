import React, { useEffect, useState } from "react";
import work from "../work"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppCtx } from "../../AppProvider";
const WorkCard = () => {
    const { theme } = useAppCtx();
    const [cardStyle, setCardStyle] = useState({ padding: '1em', backgroundColor: 'black' });

    useEffect(() => {
        theme === 'dark' ?
            setCardStyle({ padding: '1em', backgroundColor: 'hwb(0 8% 92%)', color: 'white' }) :
            setCardStyle({ padding: '1em', backgroundColor: 'white' })
    }, [theme]);

    return (
        <>
            {work.map((work) => {
                return (
                    <>
                        <Card className="edCard" style={cardStyle}>
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