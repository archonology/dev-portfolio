import interfaceEval from '../../pdfs/Interface Evaluation_RMeher_310.pdf'
import interfaceEvalPic from '../../pdfs/wayBack.png'
import wpGuide from '../../pdfs/Managing A WordPress Blog Manual.pdf'
import wpPic from '../../pdfs/wpGuide.png'
import reImagine from '../../pdfs/Reimagining Information_RMeher_110_Report1_2024.pdf'
import reimageinePic from '../../pdfs/reimaginingData.png'
import heuristic from '../../pdfs/RMeher_310_heuristicEval_2024.pdf'
import heurPic from '../../pdfs/shorewoodSwim.png'
import aiEssay from '../../pdfs/RMeher_Life With AI_Paper.pdf'
import aiPic from '../../pdfs/lifeWithAi.png'
import usabilityTest from '../../pdfs/RMeher_Phase 4 Report_310.pdf'
import goveePic from '../../pdfs/goveeAppPhase3.png'
import blog from "../../images/blogrm.jpg";


const writings = [
    {
        id: 6,
        title: "Govee Home Usability Report",
        date: 'April 2024',
        desc: "Many of the Govee devices have limited to no physical interfaces, so the ability to control the devices through the app is essential. The interface should be easy to use for multiple users because anyone in the house should have control over the lighting and the lightings settings. The goal of this test is to ascertain the usability of the interface of the Govee Home App for multiple users in the same household.",
        pdf: usabilityTest,
        image: goveePic
    },
    {
        id: 2,
        title: "Step-by-Step Guide to Managing a WordPress Blog",
        date: 'May 2024',
        desc: "The purpose of this guide is to illustrate how to edit and maintain the WordPress AI blog, CarpAI Diem. This guide is not a comprehensive guide to navigating all that you can do in WordPress. My goal is to teach you the steps you need to follow to successfully manage CarpAI Diem, a blog that has already been established.",
        pdf: wpGuide,
        image: wpPic
    },
    {
        id: 5,
        title: "Life With AI: Humanity's Next Great Upheaval",
        date: 'May 2024',
        desc: "It is not even a matter of defining and setting ethical parameters for AI, though, as I will demonstrate in this essay, it is essential that we do so quickly. Our goal rather needs to be oriented around the economy where AI is to live and grow. If we can arrive at a clear understanding and consensus of that as a society, maybe even as a species, we will be able to weather the very strange, terrifying, and wonderful hurricane of AI development and AI implementation to come.",
        pdf: aiEssay,
        image: aiPic
    },
    {
        id: 4,
        title: "Website Evaluation: Shorewood Swim Club",
        date: 'May 2024',
        desc: "The website for the Shorewood Swim Club does not include an About page where we can learn about the organization or the goals of the website. I do not like to summarize what a website is without referring to its own About page, but since that resource is lacking for this website, I will summarize this website based off the content of its homepage and the information I could put together through its various pages.",
        pdf: heuristic,
        image: heurPic
    },
    {
        id: 3,
        title: "Reimagining Information and the DIKW Pyramid for The Age of Plasticity",
        date: 'February 2024',
        desc: "It is the goal of this essay to challenge the notion of the DIKW pyramid of data, information, knowledge, and wisdom. I find that the structure of the pyramid inhibits a more natural and informed understanding of the themes, or elements, that are the pillars for the field of Information Science. I believe that a more enlightened, elemental, and natural definition of the components of the DIKW pyramid could greatly help humanity as we navigate into ever more subtle realms of information, computer science, artificial intelligence, and the regions beyond. Finally, I will comment on the long-held description of our current age as being “The Age of Information” as it relates to my proposed reimagining of the DIKW pyramid. I am rarely a fan of coining terms to describe entire epochs, especially while we are in the middle of them, but a more fitting name for our age would be The Age of Plasticity",
        pdf: reImagine,
        image: reimageinePic
    },
    {
        id: 7,
        title: "Reed's Blog",
        date: 'Ongoing',
        desc: "See more writing samples at Reed's tech blog. Custom built blog on the Wordpress.org engine with Hostinger hosting and CMS. All images are original and created with Adobe Express.",
        pdf: 'https://www.reedmeher.com/',
        image: blog
    }
]

export default writings;