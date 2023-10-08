import React from "react";
import Quotes from "../components/Quotes";
import rum from '../images/self-portrait-leaves.png'
import Image from "mui-image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';

const Home = (theme) => {
    const className = theme.theme;
    console.log(className);
    return (

        <>
            <div className='container'>

                <Image src={rum}></Image>

            </div>
            <p className={className} style={{ textAlign: 'center', margin: '2rem', marginLeft: '4%', marginRight: '4%', lineHeight: '1.5' }}>Reed Meher is a student of code on a journey to learn new worlds through technology and the languages it speaks. He has travelled the globe and worked any job he could get his hands on that would help him meet his goal: to experience humanity, to learn how to have something worth saying, and to find something worth doing. His way is to test every limit he sets for himself and to constantly reimagine what is possible. <span className="homeLinks" style={{}}> <br /> <br /><a href="https://github.com/archonology" target='_blank' rel='nonreferrer'><GitHubIcon fontSize="large" /></a>   <a href="https://www.linkedin.com/in/reed-meher" target='_blank' rel='nonreferrer'><LinkedInIcon fontSize="large" /></a>   <a href="https://reedmeher.com/" target='_blank' rel='nonreferrer'><BookIcon fontSize="large" /></a></span></p>
            <div>
                <Quotes theme={theme.theme} />
            </div>
        </>
    )
}

export default Home;