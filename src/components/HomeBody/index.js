import Quotes from "../Quotes";
import ocean from "../../images/ocean.png";
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
          bgColor="black"
          alt="detail of an ocean wave"
          duration={5000}
          height={600}
        ></Image>
      </div>

      <section className="aboutbox">
        <div id="abouttext">
          <p>
            Web development is more than just code, more than degrees, more than
            certificates. The web developing of the day demands knowing as much
            about people as it does about programming languages, frameworks, and
            libraries. It isn’t enough to be a wizard at optimization:
            developers also need to be compassionate humanitarians. People
            expect software to understand them, to be fluid, to be easy on their
            eyes and minds, not just to be super fast and technologically
            advanced.
          </p>
          <br />
          <p>
            That is why <strong>Reed Meher</strong> is the kind of developer
            you’re looking for. His most recent years have been a complete
            immersion in <strong>JavaScript, Python, Angular, React</strong> and
            the myriad of supporting libraries, tools, and technologies that
            populate the ocean of web development. Yet Reed comes to the coding
            world with a deep education in world literature, in teaching English
            as a foreign language, and in social work. He has lived around the
            world and knows deeply the value of people and of community.
          </p>
          <br />
          <p>
            Communication and empathy are at the core of his work and his
            passion. These are imperative traits and skills for the new world of
            web development. So many unimaginable advancements are emerging, and
            yet we are on the verge, in so many ways, of losing connection with
            eachother. If we lose each other and lose our sense of community,
            the advancements suddenly mean so much less.
          </p>
          <br />
          <p>
            Contact Reed if you would like to do more.
            <span className="homeLinks" style={{}}>
              {" "}
              <br /> <br />
              <a
                href="https://github.com/archonology"
                target="_blank"
                rel="nonreferrer"
                aria-label="https://github.com/archonology"
              >
                <GitHubIcon fontSize="large" />
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/reed-meher"
                target="_blank"
                rel="nonreferrer"
                aria-label="https://www.linkedin.com/in/reed-meher"
              >
                <LinkedInIcon fontSize="large" />
              </a>{" "}
              <a
                href="https://reedmeher.com/"
                target="_blank"
                rel="nonreferrer"
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
            Reed is based in Minnesota with his wife, three daugthers, their big
            golden dog, and an all-knowing cat.
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
              style={{
                marginTop: "1em",
                marginBottom: "1em",
                marginLeft: "1em",
              }}
            ></img>
            <figcaption style={{ marginLeft: '1em'}}>HackerRank Profile</figcaption>
          </figure>
        </a>
      </section>
      <UpArrow />
    </>
  );
};

export default HomeBody;
