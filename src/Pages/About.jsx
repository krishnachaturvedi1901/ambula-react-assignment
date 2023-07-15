import React from "react";
import welcomeImg from "../Static/youre-welcome-cute.gif";
import { RiCodeSSlashFill } from "react-icons/ri";
import styles from "../Styles/About.module.css";
const About = () => {
  return (
    <header>
      <section className={styles.imageNameSection}>
        <div>
          <h1>
            Lets discuss about <span>Projects</span>
          </h1>
          <h3>
            <strong>I have completed total of 4 fullstack clones using MERN stack and 20+ mini projects during my certification journey.</strong>
          </h3>
        </div>
        <img src={welcomeImg} />
      </section>
      <section className={styles.introductionSection} >
        <h1>Project Details</h1>
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

export default About;
