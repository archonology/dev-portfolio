import React from "react";
import Quotes from "../components/Quotes";
import rum from '../images/self-portrait-leaves.png'
import Image from "mui-image";

const Home = (theme) => {
    const className = theme.theme;
    console.log(className);
    return (

        <>
            <div className='container'>

                <Image src={rum}></Image>

            </div>
            <p className={className} style={{ textAlign: 'center', margin: '2rem', marginLeft: '13%', marginRight: '13%' }}>Reed Meher is a student of code on a journey to write new worlds with technology and the languages it speaks.With humble North Dakota origins, Reed has travelled the globe and worked any job he could get his hands on that would help him meet his goal: to experience humanity, to learn how to have something worth saying, and to find something worth doing.His way is to test every limit he sets for himself and to constantly reimagine what is possible. <span className="homeLinks" style={{ fontWeight: '600', lineHeight: '1.8', }}> <br /> <a href="https://github.com/archonology" target='_blank' rel='nonreferrer'>Follow on Github</a> |  <a href="https://www.linkedin.com/in/reed-meher" target='_blank' rel='nonreferrer'>Follow on LinkedIn</a> |  <a href="https://reedmeher.com/" target='_blank' rel='nonreferrer'>Reed's Blog</a></span></p>

            <div>
                <Quotes theme={theme.theme} />
            </div>
        </>
    )
}

export default Home;