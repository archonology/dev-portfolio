import wpGuide from "../../pdfs/Managing A WordPress Blog Manual.pdf";
import wpPic from "../../pdfs/wpGuide.png";
import reImagine from "../../pdfs/Reimagining Information_RMeher_110_Report1_2024.pdf";
import reimageinePic from "../../pdfs/reimaginingData.png";
import heuristic from "../../pdfs/RMeher_310_heuristicEval_2024.pdf";
import heurPic from "../../pdfs/shorewoodSwim.png";
import aiEssay from "../../pdfs/RMeher_Life With AI_Paper.pdf";
import aiPic from "../../pdfs/lifeWithAi.png";
import usabilityTest from "../../pdfs/RMeher_Phase 4 Report_310.pdf";
import goveePic from "../../pdfs/goveeAppPhase3.png";
import blog from "../../images/blogrm.jpg";
import vpcPic from "../../images/vpcPic.png";
import regexGistPic from "../../images/regexGist.png";
import ifEval from "../../pdfs/RMeher_310_InterfaceEvaluation_Jan2024.pdf";
import ifEvalPic from "../../pdfs/ifEvalPic.png";
import bjamPdf from "../../pdfs/CCWFC-Annual-Report-2016 copy.pdf";
import bJamPic from "../../images/areportBjam.png";
import galTrain from "../../images/galTrainingPic.png";
import galPdf from "../../pdfs/GAL_Training_Hanbook_ReDux_2025.pdf";
const writings = [
  {
    id: 17,
    title: "4th District Guardian ad Litem Training Handbook",
    date: "May 2025 - June 2025",
    desc: "Lead technical writer for a training manual to be used by court advocates. Worked with management and the legal team to create this manual and supporting curriculum for new guardians ad litem. Created in my role as a GAL supervisor for Minnesota's largest judicial district.",
    pdf: galPdf,
    image: galTrain,
  },
  {
    id: 2,
    title: "Step-by-Step Guide to Managing a WordPress Blog",
    date: "May 2024",
    desc: "The purpose of this guide is to illustrate how to edit and maintain the WordPress AI blog, CarpAI Diem.",
    pdf: wpGuide,
    image: wpPic,
  },
  {
    id: 7,
    title: "Reed's Blog",
    date: "Ongoing",
    desc: "See more writing samples at Reed's tech blog. Custom built blog on the Wordpress.org engine with Hostinger hosting and CMS. All images are original and created with Adobe Express.",
    pdf: "https://www.reedmeher.com/",
    image: blog,
  },
  {
    id: 6,
    title: "Govee Home Usability Report",
    date: "April 2024",
    desc: "The goal of this test is to ascertain the usability of the interface of the Govee Home App for multiple users in the same household.",
    pdf: usabilityTest,
    image: goveePic,
  },
  {
    id: 9,
    title: "Tutorial: Making a URL-Matching Regex",
    date: "September 2022",
    desc: "GitHub gist for learning about regex and building your own regular expression.",
    pdf: "https://gist.github.com/archonology/467158f6d4becd1618d8ef6e1240af83",
    image: regexGistPic,
  },
  {
    id: 14,
    title: "Co-op Annual Report",
    date: "Fall 2016",
    desc: "During my time as a marketing manager for the Cook County Whole Foods Co-op in Grand Marais, MN (back then my surname was 'Schmidt'), I was the lead editor, writer, graphic designer, and photographer of the quarterly periodical, 'The Blueberry Jam'. This is the Annual Report issue from 2016.",
    pdf: bjamPdf,
    image: bJamPic,
  },
  {
    id: 8,
    title: "Annual Donor Letter",
    date: "November 2023",
    desc: "Annual report and call for donations. Written for the Grand Marais, MN Violence Prevention Center.",
    pdf: "https://us11.campaign-archive.com/?e=__test_email__&u=5f53fb7bab478dd614984056f&id=0399a994a4",
    image: vpcPic,
  },
  {
    id: 10,
    title: "Galaxy Tab S6 vs. Apple iPad Air: Comparing the Human Factors",
    date: "January 2024",
    desc: "A technical comparision between Android and Apple tablet devices that focuses the interface and human factors.",
    pdf: ifEval,
    image: ifEvalPic,
  },
  {
    id: 5,
    title: "Life With AI: Humanity's Next Great Upheaval",
    date: "May 2024",
    desc: "An essay on the AI Boom and where we are going as a species.",
    pdf: aiEssay,
    image: aiPic,
  },
  {
    id: 4,
    title: "Website Evaluation: Shorewood Swim Club",
    date: "May 2024",
    desc: "A heuristic evaluation.",
    pdf: heuristic,
    image: heurPic,
  },
  {
    id: 3,
    title:
      "Reimagining Information and the DIKW Pyramid for The Age of Plasticity",
    date: "February 2024",
    desc: "I believe that a more enlightened, elemental, and natural definition of the components of the DIKW pyramid could greatly help humanity as we navigate into ever more subtle realms of information, computer science, artificial intelligence, and the regions beyond.",
    pdf: reImagine,
    image: reimageinePic,
  },
];

export default writings;
