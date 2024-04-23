import React from "react";
import Quotes from "../components/Quotes";
import rum from '../images/MeherDevsLogoArt23.jpeg';
import Image from "mui-image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';
import PaletteIcon from '@mui/icons-material/Palette';
import { useAppCtx } from '../AppProvider';
import rmeherVid from '../images/rMeherVid.mp4'

const Home = () => {

    const { theme } = useAppCtx();
    const className = theme;
    const artBox = theme + ' coverLogo';


    return (

        <>

            <div className={artBox}>

                <Image src={rum} style={{ maxWidth: '1000px', maxHeight: '800px' }} alt="logo image"></Image>

            </div>
            <p className={className} style={{ textAlign: 'left', margin: '2rem', marginLeft: '5%', marginRight: '5%', lineHeight: '1.5', fontSize: '2vh', marginBottom: '3%' }}>MeherDevs LLC is owned and operated by Reed Meher: a freelance web developer who offers web builds and consultations. Having spent many eclectic years as an educator, marketer, graphic designer, social worker, luthier, and web developer, Reed has a rich palette of experiences to draw from. His unconventional path through so many facets of work, the world, and society gives him a unique set of skills in intuition, compassion, communication, and big-thinking to navigate both in and outside the box.<span className="homeLinks" style={{}}> <br /> <br /><a href="https://github.com/archonology" target='_blank' rel='nonreferrer'><GitHubIcon fontSize="large" /></a>   <a href="https://www.linkedin.com/in/reed-meher" target='_blank' rel='nonreferrer'><LinkedInIcon fontSize="large" /></a>   <a href="https://reedmeher.com/" target='_blank' rel='nonreferrer'><BookIcon fontSize="large" /></a>  <a href="https://reedmeher.myportfolio.com/" target='_blank' rel='nonreferrer'><PaletteIcon fontSize="large" /></a></span></p>
            <div>

            </div>
            <div id="vidBox">
                <video autoPlay muted loop id="vid"><source src={rmeherVid} type="video/mp4"></source>
                </video>
            </div>
            <Quotes theme={theme.theme} />
        </>
    )
}

export default Home;
