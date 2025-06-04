import {Link } from "react-router-dom";
import Template from "../template/template";
import "./home.css";
import { DefaultHeader, DefaultFooter } from "../template/headers";

function MainContent() {
  return (
    <>
    <div className="home-list">
      <div className="home-item">
        <div className="content">
          <h2>Welcome</h2>
          <p>
            Welcome to Kaze Tsuki's webpage!
            This is a personal project to showcase my work and interests. 
            Feel free to explore the different sections to learn more about me, 
            my projects, and my hobbies.
          </p>
        </div>
        <div className="image"><img src="" alt="Intro" /></div>
      </div>
      <Link to="/About" className="home-item">
        <div className="content">
          <h2>About</h2>
          <p>
            Click here to learn more about me, my background, and my interests.
          </p>
        </div>
        <div className="image"><img src="" alt="About" /></div>
      </Link>
      <Link to="/Program" className="home-item">
        <div className="content">
          <h2>Program Portfolio</h2>
          <p>
            Here you can find a collection of my programming projects,
            including web applications, scripts, and other software development.
            Most of them are from my learning journey, showcasing my skills in various programming languages.
          </p>
        </div>
        <div className="image"><img src="" alt="Program" /></div>
      </Link>
      <Link to="/Finance" className="home-item">
        <div className="content">
          <h2>Finance</h2>
          <p>
            This section includes my personal finance management tools and resources.
            I aim to share insights on budgeting, investing, and financial planning.
          </p>
        </div>
        <div className="image"><img src="" alt="Finance" /></div>
      </Link>
    </div>
    </>
  );
}

export default function Home() {

  return (
    <Template 
      head={<DefaultHeader display={"首頁"} />}
      child={<MainContent />}
      foot={<DefaultFooter />}
    />
  );
}