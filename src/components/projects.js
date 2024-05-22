import prima from "../images//primaNew.jpg";
import homeParty from "../images/home-party-page.jpg";
import cwp from "../images/cwp.jpg";
import bakpak from "../images/BakPak2.jpg";
import vpc from "../images/vpcBanner1.jpeg";
import blog from "../images/blogrm.jpg";
import wanderComma from "../images/wandercomma2.png";
import portpic from "../images/portfolio.jpg";

const projects = [
  {
    title: "The Childwelfare Portal",
    description: `The Childwelfare Portal has dual web token environments for administrators and regular users. Admins can add, delete, and make changes to any aspect of the content, while users are able to add resources to lists, create custom quicklinks to resources, and add and remove resources from a kanban-style list of to-do, doing, and done. 
        
        The admin login routes are hidden with a secret URL and they have unique access to a content creator dashboard where they can manage all aspects of the site.
        `,
    techStack: [
      "ReactJS",
      "MongoDB",
      "Express",
      "Node.js",
      "GraphQL",
      "Material UI",
      "Apollo Server",
      "JSON Web Token",
      "EmailJS",
    ],
    liveLink: "https://www.childwelfareportal.org/",
    repoLink: "https://github.com/archonology/CW-Portal",
    image: cwp,
  },
  {
    title: "Prima-Materia",
    description:
      "Reed was assistant-lead developer, backend designer, and implemented the third party fetch API functionality on this deckbuilding application. Users can search cards, create decks, manage a favorites list, and conduct random searches on the 'Mystery Card' page. Prima-materia was built by a team of four developers.",
    techStack: [
      "ReactJS",
      "MongoDB",
      "Express",
      "Node.js",
      "GraphQL",
      "Material UI",
      "Apollo Server",
      "JSON Web Token",
    ],
    liveLink: "https://prima-materia-84.herokuapp.com/",
    repoLink: "https://github.com/archonology/Prima-Materia",
    image: prima,
  },
  {
    title: "BakPak",
    description:
      "A fun website that works great as a PWA(Progressive Web Application). Currently, it has a 1. calculator that Reed built from scratch with JavaScript, React's useState, and CSS. 2. A dictionary that lets you search and save words to localStorage from a public dictionary API. 3. A notebook that lets you display entries and saves them chronologically in localStorage.",
    techStack: [
      "React",
      "LocalStorage",
      "Express",
      "Node.js",
      "GH-Pages",
      "Material UI",
    ],
    liveLink: "https://archonology.github.io/BakPak/#/home",
    repoLink: "https://github.com/archonology/BakPak",
    image: bakpak,
  },
  // {
  //     title: "CarpAI Diem",
  //     description: `A mock blog built on the WordPress platform, CarpAI Diem explores the more personal side of AI and what it thinks about itself. By 'interviewing' ChatGPT about playful topics such as 'How does AI deal with stress?', 'Why does AI love to ride bike?' CarpAI Diem offers some playful fun that may also be eye-opening and challenge the ways we perceive AI.`,
  //     techStack: "WordPress | Adobe Express",
  //     liveLink: "https://rmeher.soisweb.uwm.edu/wordpress/",
  //     image: carpAI
  // },
  {
    title: "The Violence Prevention Center",
    description: `New responsive website on the Wix Platform. Special attention was given during development to the safety of visitors who may be in dangerous situations. I completed several accessiblity and SEO tests and optimizations.
        `,
    techStack: ["Wix", "Adobe Express"],
    liveLink: "https://www.violencepreventioncenter.org/",
    image: vpc,
  },
  {
    title: "Home Party",
    description:
      "Home Party provides a way to save the real estate you're tracking, pair them with styles and furnishings, and share what you find with friends and family.",
    techStack: ["MySQL", "Handlebars", "Express", "Sequelize", "EmailJS"],
    liveLink: "https://home-party-app.herokuapp.com",
    repoLink: "https://github.com/archonology/Home-Party",
    image: homeParty,
  },
  {
    title: "Reed's Blog",
    description: `Custom built blog on the Wordpress.org engine with Hostinger hosting and CMS. All images are original and created with Adobe Express.
        `,
    techStack: ["Wordpress.org", "Hostinger", "Adobe Express"],
    liveLink: "https://www.reedmeher.com/",
    image: blog,
  },
  {
    title: "The Wandering Comma",
    description:
      "A budding web developer often needs a custom blog where they can post about tech topics they are learning. This MVC (Model View Controller) style application offers users the ability to create, read, update, and delete(CRUD) blog posts. Posts are organized chronologically and allow for other users to comment on all posts.",
    techStack: ["MySQL", "Handlebars", "Express", "Sequelize"],
    liveLink: "https://the-wandering-comma.herokuapp.com",
    repoLink: "https://github.com/archonology/The-Wandering-Comma-Tech-Blog",
    image: wanderComma,
  },
  {
    title: "This Portfolio",
    description:
      "Built with ReactJS and custom CSS for all formatting and animations, this portfolio utilizes React Hooks and a minimal number of components from CSS libraries. Check out the repo to see the code behind it!",
    techStack: ["ReactJS", "Github", "Pages", "React Context", "Material UI"],
    liveLink: "https://www.meherdevs.com/",
    repoLink: "https://github.com/archonology/dev-portfolio",
    image: portpic,
  },
  // {
  //     title: "Web Wedding Invite",
  //     description: "A landing page that acts as a wedding invite. Built with React and Vite, this full stack site lets the host create a private login user that can be shared with their gueslist. Reach out to MeherDevs on the contact page to get login password.",
  //     techStack: "ReactJS | GraphQL | Material UI | Vite | Render",
  //     liveLink: "https://www.reedandheidi.com",
  //     repoLink: "https://github.com/archonology/wedding-party",
  //     image: wedding
  // },
  // {
  //     title: "A Night In",
  //     description: "Sometimes a user is looking for a night at home. A Night In helps the user find food and drink recipes as well as find films and shows to watch for the night in. Recipes can be saved to LocalStorage. This was made by a team of three developers. I was in charge of Tailwind research and implementation and creating the cocktail recipe API, writing the frontend code, and developing the user interface.",
  //     techStack: "Vanilla JS | Tailwind CSS | LocalStorage | Fetch API",
  //     liveLink: "https://archonology.github.io/A-Night-In/",
  //     repoLink: "https://github.com/archonology/A-Night-In",
  //     image: nightIn
  // },
];

export default projects;
