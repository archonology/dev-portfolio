import React from "react";
import Quotes from "../components/Quotes";
import rum from '../images/self-portrait-leaves.png'
import Image from "mui-image";

const Home = (theme) => {
    const className = theme.theme;
    return (

        <>
            <div className='container'>
                
                <Image src={rum}></Image>
                
            </div>
            <p className={className} style={{ textAlign: 'center', margin: '2rem' }}>Reed Meher is a certified full stack web developer and a father of three. He specializes in the MERN Stack and learning new tricks. <span className="homeLinks" style={{ fontWeight: '600', lineHeight: '1.8', }}> <br /> <a href="https://github.com/archonology" target='_blank' rel='nonreferrer'>Follow on Github</a> |  <a href="https://www.linkedin.com/in/reed-meher" target='_blank' rel='nonreferrer'>Follow on LinkedIn</a></span></p>
            
            <div>
                <Quotes theme={theme.theme} />
            </div>
        </>
    )
}

export default Home;