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
          <p>
            Reed is all about communication, creativity, tenacity, and the
            pursuit of solutions. He lives by the value that there is always
            more to learn and more to share. In this portfolio, you will find
            projects he has built with code and words he has written by the
            precepts of technical writing.{" "}
          </p>
          {/* <br />
          // <p>
          //   As long as he can remember, Reed wanted to be a writer. But what
          //   does a writer write? When he was young, it was all imagination. By
          //   the time he was a young man, he desired experience: experience of
          //   the world and experience of his place in it. As he sought that
          //   experience, he crossed the globe. He studied in Norway. He taught in
          //   South Korea. He crossed the USA by bus, rail, and car. From waiting
          //   tables to fixing fiddles to marketing to social work to coding, he
          //   experienced as much as he could. All the while, he wrote.
          // </p>
          // <br />
          // <p>
          //   Life isn’t always a straight line, and Reed has always looked for
          //   the crooked path, the hidden passage, and the stone unturned. Now,
          //   he is seeking to put writing at the forefront and bring it out as
          //   the central theme in his career. It may have been obscured in the
          //   early years, but look close and you will see that the thread of
          //   writing never really veered. Writing was the very reason Reed set
          //   out all those years ago, and it is here still in the return.{" "}
          // </p> */}
          <br />
          <hr />
          <br />
          <p style={{ color: "var(--secondary)" }}>
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
