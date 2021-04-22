import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaDiscord, FaGithub, FaLinkedin, FaSkype } from 'react-icons/fa';

import styles from '../../styles/pages/homepage/ContactCard.module.css';
import homepageStyles from '../../styles/pages/Homepage.module.css';

function ContactCard() {
  const { t } = useTranslation();
  return (
    <div className="contactContainerTarget">
      <div className={homepageStyles.homepageTitle}>
        {t('homepage.contact.title')}
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactTitle}>
          {t('homepage.contact.description')}
        </div>
        <div className={styles.contactLinks}>
          <a
            href="https://github.com/matheusem"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-eugenio/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/matheusem"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-eugenio/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
