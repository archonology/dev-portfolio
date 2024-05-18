import * as React from "react";
import { useAppCtx } from '../../AppProvider';


const Footer = () => {
    const { theme } = useAppCtx();

    const foot = theme;

    return (
        <footer className={foot}>
            <section className={foot}>
                <p >MeherDevs LLC | 2024</p>
            </section>
        </footer>
    )
}

export default Footer;