import * as React from "react";
import { useAppCtx } from '../../AppProvider';


const Footer = () => {
    const { theme } = useAppCtx();

    const foot = theme;

    return (
        <footer className={foot}>
            <section className={foot}>
                <p >Made by MeherDevs LLC | 2023</p>
            </section>
        </footer>
    )
}

export default Footer;