import Quotes from "../Quotes";
import ocean from "../../images/computer-program-coding-screen.jpg";
import Image from "mui-image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";
import reedBW from "../../images/reedBW.jpeg";
import UpArrow from "../UpArrow";
import EdCard from "../EdCard";

const HomeBody = () => {
  return (
    <>
      <div className="HomeBox">
        <div className="quotebox">
          <Quotes />
        </div>

        <Image
          id="ocean"
          src={ocean}
          bgColor="var(--paper)"
          alt="code in many colors"
          duration={5000}
          height={450}
        ></Image>
      </div>

      <section className="aboutbox">
        <div id="abouttext">
          {/* <p>
            Coding demands knowing as much about people as it does about the
            ever changing sea of programming languages, frameworks, and
            libraries. It isn’t enough to be a wizard at optimization:
            developers also need to be oriented around user experience. People
            expect software to understand their needs, to be fluid, and to be
            easy on their eyes and minds.
          </p>
          <br /> */}
          {/* <p>
            That is why <strong>Reed Meher</strong> is the kind of developer
            you’re looking for. His most recent years have been a complete
            immersion in <strong>JavaScript, Python, Angular, React</strong> and
            the myriad of supporting libraries, tools, and technologies that
            populate the ocean of web development. Yet Reed comes to the coding
            world with a long background in writing, teaching English as a
            foreign language, and social work, which has helped him become a
            skilled <strong>technical writer</strong>, researcher, teammate, and
            leader.
          </p> */}
          <br />
          <p>
            Reed is all about communication, Creativity, tenacity, and the
            pursuit of solutions. He lives by the value that there is always
            more to learn and that no matter how well built something is it can
            always be better.
          </p>
          <br />
          <p>
            Check out Reed's blog and follow him on Github or LinkedIn:
            <span className="homeLinks" style={{}}>
              {" "}
              <br /> <br />
              <a
                href="https://github.com/archonology"
                target="_blank"
                rel="noreferrer"
                aria-label="https://github.com/archonology"
              >
                <GitHubIcon fontSize="large" />
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/reed-meher"
                target="_blank"
                rel="noreferrer"
                aria-label="https://www.linkedin.com/in/reed-meher"
              >
                <LinkedInIcon fontSize="large" />
              </a>{" "}
              <a
                href="https://reedmeher.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="https://reedmeher.com/"
              >
                <BookIcon fontSize="large" />
              </a>{" "}
            </span>
          </p>
        </div>
        <figure id="portraitBox">
          <Image
            id="portrait"
            src={reedBW}
            bgColor="black"
            alt="portrait of Reed Meher in black and white"
            // style={{ width: "35svw" }}
            duration={5000}
          ></Image>
          <figcaption style={{ marginTop: "1rem" }}>
            Reed is based in Minnesota with his wife, three daugthers, a big
            golden dog, and a noisy tuxedo cat.
          </figcaption>
        </figure>
      </section>
      <section id="educationBox">
        <h2>Education</h2>
        <EdCard />
        <a
          href="https://www.hackerrank.com/profile/MeherDevs"
          style={{ color: "var(--liveGreen)", fontWeight: "700" }}
          className=" certif"
        >
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png"
              width={200}
              alt="HackerRank logo"
              style={{
                marginTop: "1em",
                marginBottom: "1em",
                marginLeft: "1em",
              }}
            ></img>
            <figcaption style={{ marginLeft: "1em" }}>
              HackerRank Profile
            </figcaption>
          </figure>
        </a>
      </section>
      <UpArrow />
    </>
  );
};

export default HomeBody;
