import React from "react";
import prima from '../images/prima-materia-home.jpg';
import homeParty from '../images/home-party-page.jpg'
import wanderComma from '../images/WanderingComma2.png';
import nightIn from '../images/a-night-in-page.jpg';
import cwp from '../images/CWP fresh screenshot Sept23.png';
import bakpak from '../images/BakPak2.png';
const projects = [
    {
        title: "The Childwelfare Portal",
        description: `The Childwelfare Portal has dual web token environments for administrators and regular users. Admins can add, delete, and make changes to any aspect of the content, while users are able to add resources to lists, create custom quicklinks to resources, and add and remove resources from a kanban-style list of to-do, doing, and done. 
        
        The admin login routes are hidden with a secret URL and they have unique access to a content creator dashboard where they can manage all aspects of the site.
        `,
        techStack: "ReactJS | MongoDB | Express | Node.js | GraphQL | Material UI | Apollo | JSON Web Token | EmailJS",
        liveLink: "https://www.childwelfareportal.org/",
        repoLink: "https://github.com/archonology/CW-Portal",
        image: cwp
    },
    {
        title: "Prima-Materia",
        description: "Reed was assistant-lead developer, backend designer, and implemented the third party fetch API functionality on this deckbuilding application. Users can search cards, create decks, manage a favorites list, and conduct random searches on the 'Mystery Card' page. Prima-materia was built by a team of four developers.",
        techStack: "ReactJS | MongoDB | Express | Node.js | GraphQL | Material UI | Apollo | JSON Web Token",
        liveLink: "https://prima-materia-84.herokuapp.com/",
        repoLink: "https://github.com/archonology/Prima-Materia",
        image: prima
    },
    {
        title: "BakPak",
        description: "A fun website that works great as a PWA(Progressive Web Application). Currently, it has a 1. calculator that Reed built from scratch with JavaScript, React's useState, and CSS. 2. A dictionary that lets you search and save words to localStorage from a public dictionary API. 3. A notebook that lets you display entries and saves them chronologically in localStorage.",
        techStack: "ReactJS | LocalStorage | Express | Node.js | GH-Pages | Material UI",
        liveLink: "https://archonology.github.io/BakPak",
        repoLink: "https://github.com/archonology/BakPak",
        image: bakpak
    },
    {
        title: "BakPak",
        description: "A fun website that works great as a PWA(Progressive Web Application). Currently, it has a 1. calculator that Reed built from scratch with JavaScript, React's useState, and CSS. 2. A dictionary that lets you search and save words to localStorage from a public dictionary API. 3. A notebook that lets you display entries and saves them chronologically in localStorage.",
        techStack: "ReactJS | LocalStorage | Express | Node.js | GH-Pages | Material UI",
        liveLink: "https://archonology.github.io/BakPak",
        repoLink: "https://github.com/archonology/BakPak",
        image: bakpak
    },
    {
        title: "BakPak",
        description: "A fun website that works great as a PWA(Progressive Web Application). Currently, it has a 1. calculator that Reed built from scratch with JavaScript, React's useState, and CSS. 2. A dictionary that lets you search and save words to localStorage from a public dictionary API. 3. A notebook that lets you display entries and saves them chronologically in localStorage.",
        techStack: "ReactJS | LocalStorage | Express | Node.js | GH-Pages | Material UI",
        liveLink: "https://archonology.github.io/BakPak",
        repoLink: "https://github.com/archonology/BakPak",
        image: bakpak
    },
    {
        title: "BakPak",
        description: "A fun website that works great as a PWA(Progressive Web Application). Currently, it has a 1. calculator that Reed built from scratch with JavaScript, React's useState, and CSS. 2. A dictionary that lets you search and save words to localStorage from a public dictionary API. 3. A notebook that lets you display entries and saves them chronologically in localStorage.",
        techStack: "ReactJS | LocalStorage | Express | Node.js | GH-Pages | Material UI",
        liveLink: "https://archonology.github.io/BakPak",
        repoLink: "https://github.com/archonology/BakPak",
        image: bakpak
    },

]

export default projects;