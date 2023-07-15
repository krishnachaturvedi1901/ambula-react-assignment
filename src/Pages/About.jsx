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
            <strong>
              I have completed total of 4 fullstack clones using MERN stack and
              20+ mini projects during my certification journey.
            </strong>
          </h3>
          <h4>Please checkout my <a href="http://www.krishnachaturvedi.tech" target="_blank" >Portfolio</a> and github for all projects</h4>
        </div>
        <img src={welcomeImg} />
      </section>

      <section className={styles.introductionSection}>
        <h1>Project Details</h1>
        <div className={styles.oneProjectDiv}>
          <div className={styles.left}>
            <div className={styles.img}>
              <img src="https://i.imgur.com/qzZ86v4.jpg" alt="" />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.projectTitle}>
              Full-stack Blissworld Clone{" "}
            </h2>

            <p className={styles.projectDesc}>
              <div className={styles.featureDiv} >
                Build clone of blissworld in 7 days along with a team 4 members.
                <h3>Features</h3>
                <ul style={{ marginLeft: "30px" }}>
                  <li>Login</li>
                  <li>Signup</li>
                  <li>Product page</li>
                  <li>Product detail page</li>
                  <li>Cart Page</li>
                  <li>Checkout Page</li>
                  <li>Order page</li>
                </ul>
              </div>
              <div className={styles.techStackDiv} >
                <h2>
                  <b>
                    <i> Tech Stack :</i>
                  </b>{" "}
                  Reactjs | ChakraUI | Nodejs | Express | MongoDB | Mongoose
                </h2>
                <br/>
                <h2>
                  <b>
                    <i> Area of Responsibility :</i>
                  </b>{" "}
                  Developed the cart page with all CRUD properties of adding
                  product to cart , update and delete products from cart.
                </h2>
              </div>
            <div className={styles.buttons}>
              <a
                href="https://github.com/krishnachaturvedi1901/Blissworld_MERN_Fullstack_Clone"
                target="_blank"
                className={styles.primaryBtn}
              >
                GitHub
              </a>
              <a
                href="https://blissworld-fullstack-clone.netlify.app"
                target="_blank"
                className={styles.primaryBtn}
              >
                Preview{" "}
              </a>
              <a
                href="https://blissworld-mern-fullstack-clone.hashnode.dev/mern-full-stack-clone"
                target="_blank"
                className={styles.primaryBtn}
              >
                Blog{" "}
              </a>
              <a
                href="https://blissworld-mern-fullstack-clone.hashnode.dev/mern-full-stack-clone"
                target="_blank"
                className={styles.primaryBtn}
              >
                Demo{" "}
              </a>
            </div>
            </p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default About;
