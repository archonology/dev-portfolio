import React from "react";
import Quotes from "../components/Quotes";
import ocean from "../images/ocean.png";
import Image from "mui-image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";
import PaletteIcon from "@mui/icons-material/Palette";
import { useAppCtx } from "../AppProvider";
import rmeherVid from "../images/rmeherVid.mp4";
import reedBW from "../images/reedBW.jpeg";

const Home = () => {
  const { theme } = useAppCtx();
  const className = theme;
  const artBox = theme + " coverLogo";

  return (
    <>
      <div className={artBox}>
        <div className="quotebox">
          <Quotes theme={theme.theme} />
        </div>

        <Image
        id="ocean"
          src={ocean}
          bgColor="black"
          alt="detail of an ocean wave"
        ></Image>
      </div>

      <div className="aboutbox">
        <div id="abouttext">
          <p
            className={className}
            style={{
              textAlign: "left",
              lineHeight: "1.4",
              fontSize: "18px",
              marginBottom: "3%",
              //   backgroundColor: "rgb(10, 20, 49)",
              color: "white",
              padding: "9svw",
            }}
          >
            MeherDevs LLC is owned and operated by Reed Meher: a freelance web
            developer who offers web builds and consultations. Having spent many
            eclectic years as an educator, marketer, graphic designer, social
            worker, luthier, and web developer, Reed has a rich palette of
            experiences to draw from. His unconventional path through so many
            facets of work, the world, and society gives him a unique set of
            skills in intuition, compassion, communication, and big-thinking to
            navigate both in and outside the box.
            <span className="homeLinks" style={{}}>
              {" "}
              <br /> <br />
              <a
                href="https://github.com/archonology"
                target="_blank"
                rel="nonreferrer"
              >
                <GitHubIcon fontSize="large" />
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/reed-meher"
                target="_blank"
                rel="nonreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </a>{" "}
              <a
                href="https://reedmeher.com/"
                target="_blank"
                rel="nonreferrer"
              >
                <BookIcon fontSize="large" />
              </a>{" "}
              <a
                href="https://reedmeher.myportfolio.com/"
                target="_blank"
                rel="nonreferrer"
              >
                <PaletteIcon fontSize="large" />
              </a>
            </span>
          </p>
        </div>
        <div id="portraitbox">
          <Image
            id="portrait"
            src={reedBW}
            bgColor="black"
            alt="portrait of Reed Meher in black and white"
            // style={{ width: "35svw" }}
          ></Image>
        </div>
      </div>
      {/* <div id="vidBox">
        <video autoPlay muted loop id="vid">
          <source src={rmeherVid} type="video/mp4"></source>
        </video>
      </div> */}
    </>
  );
};

export default Home;
