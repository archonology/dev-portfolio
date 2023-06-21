import * as React from "react";


const Footer = (theme) => {
  
    const foot = theme.theme;

    return (
        <footer className={foot}>
            <section className={foot}>
                <a href="/"><p >Made by MeherDevs | 2023</p></a>
            </section>
        </footer>
    )
}

export default Footer;