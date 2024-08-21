import prima from "../images//primaNew.jpg";
import homeParty from "../images/home-party-page.jpg";
import cwp from "../images/cwp.jpg";
import bakpak from "../images/BakPak2.jpg";
import vpc from "../images/vpcBanner1.jpeg";
import blog from "../images/blogrm.jpg";
import wanderComma from "../images/wandercomma2.png";
import portpic from "../images/portfolio.jpg";
import clipzPic from "../images/clipzPic.png";
import imgEffPic from "../images/imgEffectPic.png";
import termFindPic from "../images/termFinder.png";

const projects = [
  {
    id: 9,
    title: "Clipz For Gamers",
    date: "March 2024 - Present",
    description:
      "Clipz has been a massive undertaking to implement many tools and get at every corner of Angular (pun intended). It allows users to create accounts, view gaming videos others have uploaded, and upload their own short gaming videos.",
    techStack: [
      "Angular",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "AngularFire",
      "Rust",
      "WebAssembly",
      "HTML",
    ],
    liveLink: "https://clipz-for-gamers.vercel.app/",
    repoLink: "https://github.com/archonology/clipz-for-Gamers/",
    image: clipzPic,
  },
  {
    id: 10,
    title: "Image Effects",
    date: "May 2024",
    description:
      "Image-Effect allows users to upload images convert them to grayscale. They can then view and download the modified image. This application was built with WebAssembly, Rust, and some helpful tools outlined below. The application has been deployed via Vercel.",
    techStack: [
      "Rust",
      "WebAssembly",
      "TailwindCSS",
      "WebPack",
      "JavaScript",
      "HTML",
    ],
    liveLink: "https://image-effects-xi.vercel.app/",
    repoLink: "https://github.com/archonology/image-effects",
    image: imgEffPic,
  },
  {
    id: 1,
    title: "The Childwelfare Portal",
    date: "January 2023 - Present",
    description: `Child welfare social workers rely on access to an sea of ever changing resources in their important work of supporting children and families. There is no centralized resource hub for their work, and what hubs there suffer from being out of date, static websites. It is essential that child welfare workers can find resources and learn from up to date sources. 

Enter The Child Welfare Portal. Reed worked with a licensed social worker and put to use his social work background to deliver this full stack application, which comes complete with an admin dashboard for quickly and easily creating, updating, and deleting content across the site. 
    
Users can login and create custom hotlinks that go right to the top of the links tab. They can even assign resources to a kanban style list tracker and manage it from the dashboard.
    
While in ongoing development, the CWP is fully functional and is being improved frequently via continuous integration. For Reed, the CWP is a labor of love.
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
    liveLink: "https://childwelfareportal.herokuapp.com/",
    repoLink: "https://github.com/archonology/CW-Portal",
    image: cwp,
  },
  {
    id: 11,
    title: "Term Finder",
    date: "May 2024",
    description:
      "Term Finder is a python program that searches a given set of text documents for single word occurances. The program allows the user to input a word to search for in the documents and the program returns the frequency results in percentages, rounded to the nearest 5th decimal.",
    techStack: ["Python"],
    liveLink: "",
    repoLink: "https://github.com/archonology/Term-Finder",
    image: termFindPic,
  },
  {
    id: 2,
    title: "Prima-Materia",
    date: "December 2022",
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
    id: 3,
    title: "BakPak",
    date: "May 2023",
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
    id: 4,
    title: "The Violence Prevention Center",
    date: "July 2023 - September 2023",
    description: `I was tasked to do a Rebuild for accessibility, safety, and responsiveness on the WIX platform. The website went from over 40 accessibilty issues per page to zero, and I fixed the safety features to be more secure for users. Also, I optimized each page for SEO, resulting in a weekly increase in web traffick and online donations to the agency. 
    
The website was completely redesign and launched with board approval in less than 90 days.
        `,
    techStack: ["Wix", "Adobe Express"],
    liveLink: "https://www.violencepreventioncenter.org/",
    image: vpc,
  },
  {
    id: 5,
    title: "Home Party",
    date: "November 2022",
    description:
      "Home Party provides a way to save the real estate you're tracking, pair them with styles and furnishings, and share what you find with friends and family.",
    techStack: ["MySQL", "Handlebars", "Express", "Sequelize", "EmailJS"],
    liveLink: "https://home-party-app.herokuapp.com",
    repoLink: "https://github.com/archonology/Home-Party",
    image: homeParty,
  },
  {
    id: 6,
    title: "Reed's Blog",
    date: "July 2023 - Present",
    description: `Custom built blog on the Wordpress.org engine with Hostinger hosting and CMS. All images are original and created with Adobe Express.
        `,
    techStack: ["Wordpress.org", "Hostinger", "Adobe Express"],
    liveLink: "https://www.reedmeher.com/",
    image: blog,
  },
  {
    id: 7,
    title: "The Wandering Comma",
    date: "November 2022",
    description:
      "A budding web developer often needs a custom blog where they can post about tech topics they are learning. This MVC (Model View Controller) style application offers users the ability to create, read, update, and delete(CRUD) blog posts. Posts are organized chronologically and allow for other users to comment on all posts.",
    techStack: ["MySQL", "Handlebars", "Express", "Sequelize"],
    liveLink: "https://the-wandering-comma.herokuapp.com",
    repoLink: "https://github.com/archonology/The-Wandering-Comma-Tech-Blog",
    image: wanderComma,
  },
  {
    id: 8,
    title: "This Portfolio",
    date: "May 2024 - Present",
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
