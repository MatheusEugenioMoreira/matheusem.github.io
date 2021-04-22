import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { scroller } from 'react-scroll';

import styles from '../styles/pages/Homepage.module.css';

import gitStackIcon from '../assets/icons/stack/git.svg';
import javascriptStackIcon from '../assets/icons/stack/javascript.svg';
import dockerStackIcon from '../assets/icons/stack/docker.svg';
import pythonStackIcon from '../assets/icons/stack/python.svg';
import reactStackIcon from '../assets/icons/stack/react.svg';
import csharpStackIcon from '../assets/icons/stack/c.svg';
import sqlServerStackIcon from '../assets/icons/stack/sql-server.svg';
import typescriptStackIcon from '../assets/icons/stack/typescript.svg';
import mailIcon from '../assets/icons/mail.svg';

// import downIcon from '../assets/icons/down.svg';
import { useTranslation } from 'react-i18next';
import AboutMe from '../components/AboutMe';
import ContactCard from '../components/homepage/ContactCard';
import SkillStack from '../components/homepage/SkillStack';

function Homepage() {
  const { t } = useTranslation();
  const scrollToSkills = () => {
    scroller.scrollTo('skillsContainerTarget', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOut',
      offset: -90,
    });
  };

  const scrollToContact = () => {
    scroller.scrollTo('contactContainerTarget', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOut',
      offset: -90,
    });
  };

  return (
    <>
      <div className={styles.homepageContainer}>
        <p></p>
        <div className={styles.presentationContainer}>
          <div className={styles.presentationText}>
            <strong>{t('homepage.hero.catchPhrase1')}</strong>
            
          </div>
          <div className={styles.presentationAbout}>
            <h1>Matheus Eugenio Moreira</h1>
            <p>Full Stack Developer</p>
            <p>{t('homepage.hero.location')}</p>
            <div className={styles.presentationStack} onClick={scrollToSkills}>
              <div className={styles.stackIconsContainer}>
                <img src={csharpStackIcon} alt="c#" />
                <img src={pythonStackIcon} alt="python" />
                <img src={dockerStackIcon} alt="Docker" />
                <img src={sqlServerStackIcon} alt="SQL Server" />
                <img src={gitStackIcon} alt="Git" />
                <img src={reactStackIcon} alt="React" />
                <img src={javascriptStackIcon} alt="Javascript" />
                <img src={typescriptStackIcon} alt="Typescript" />
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className={styles.footerButton}
          onClick={scrollToContact}
        >
          <img src={mailIcon} alt="Mail" className={styles.footerButtonImg} />
          {t('homepage.hero.contactButton')}
        </button>
        <div className={styles.scrollIndicatorContainer}>
          <FaChevronDown />
        </div>
      </div>
      <div className={styles.stackDetailsContainer}>
        <div className={styles.homepageTitle}>{t('homepage.about.title')}</div>
        <AboutMe />
        <div className={`${styles.homepageTitle} skillsContainerTarget`}>
          {t('homepage.stack.title')}
        </div>
        <SkillStack />
        <ContactCard />
      </div>
    </>
  );
}

export default Homepage;
