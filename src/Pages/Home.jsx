import React from "react";
import welcomeImg from "../Static/cute-penguin.gif";
import { RiCodeSSlashFill } from "react-icons/ri";
import styles from "../Styles/Home.module.css";
const Home = () => {
  return (
    <header>
      <section className={styles.imageNameSection}>
        <img src={welcomeImg} />
        <div>
          <h1>
            Hlw, Iam <span> Krishna Chaturvedi</span>
          </h1>
          <h2>
            <strong>Iam a fullstack web-developer</strong>
            <span>
              <RiCodeSSlashFill size={40} />
            </span>
          </h2>
        </div>
      </section>
      <section className={styles.introductionSection} >
        <h1>Introduction</h1>
        <div>
          <ul>
            <li>I belongs from Jhansi(U.P.)</li>
            <li>
              Iam a gradguate and completed my fullstack certification from{" "}
              <strong>Masai school</strong> this year.
            </li>
            <h3>Skills</h3>
            <li>
              I know<strong> HTML, CSS ,Javscript ,React, Nodejs, Express, MongoDB,
              ChakraUI </strong> and using these techstack i have created 2-3 clones and
              lots of mini projects during my certification in masai school.
            </li>
            <li>
              I have solved nearly 400 questions in DSA using <strong>JAVA</strong> which
              enhances my logic building and helped lot in solving problems
              during development.
            </li>
            <h3>Projects</h3>
            <li>I have done my project discussion in <a href="/about" >About</a> page </li>
            <h3>Past Experience</h3>
            <li>I have worked more then a year in Gurgao based startup 'Goflydigital.pvt.ltd' as a <strong> Character artist and designer</strong> after that i started learning fullstack development.</li>
            <h3>Hobbies & Intrests</h3>
            <li>I love storts and fitness and pursue doing it sideways.</li>
            <li>Iam a <strong>Taekwondo state gold medalist</strong> and Volleyball Inter-university champion in my college time</li>
            <li>Right now iam learning Table-tennis in evening</li>
            <h1>Thankyou! &#128512; </h1>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Home;
