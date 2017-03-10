import React from 'react';
import Headshot from '../../assets/headshot.png';
import Email from '../../components/icons/Email/Email';
import CV from '../../components/icons/CV/CV';
import LinkedIn from '../../components/icons/LinkedIn/LinkedIn';
import Github from '../../components/icons/Github/Github';
import Medium from '../../components/icons/Medium/Medium';
import styles from './About.css';

const About = () => (
  <div className={styles.container}>
    <img
      alt="Anthony Ng"
      className={styles.headshot}
      src={Headshot}
      />
    <p>Hello.</p>
    <p>
      I am a full stack web developer with a passion for learning new technologies, making things fast and teching others.
    </p>
    <p>
      Please feel free to contact me if you want to see more, collaborate, or say hello!
    </p>

    <div>
      <Email />
      <CV />
      <LinkedIn />
      <Github />
      <Medium />
    </div>
  </div>
);

export default About;
