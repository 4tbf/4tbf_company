import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import ArrowIcon from '../../svgs/ArrowIcon';
import LinkedInIcon from '../../svgs/LinkedInIcon';
import TwiiterIcon from '../../svgs/TwiiterIcon';
import FacebookIcon from '../../svgs/FacebookIcon';
import InstagramIcon from '../../svgs/InstagramIcon';
import CopyrightIcon from '../../svgs/CopyrightIcon';
import Text from '../../../features/atoms/text';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerMainRow}>
          <div className={styles.footerHeader}>Logo</div>
          <div className={styles.footerMenu}>
            <menu>
              <Link className={styles.footerLinks} href="#">
                <span> Why We?</span>
              </Link>
              <Link className={styles.footerLinks} href="#">
                <span> Services</span>
              </Link>
              <Link className={styles.footerLinks} href="#">
                <span> Case Studies</span>
              </Link>
              <Link className={styles.footerLinks} href="#">
                <span> Cost Calculator</span>
              </Link>
              <Link className={styles.footerLinks} href="/about">
                <span> About Us</span>
              </Link>
              <Link className={styles.footerLinks} href="/contact-us">
                <span> Contact Us</span>
              </Link>
              <div className={styles.footerLinks}>
                <ul className={styles.footerLanguage}>
                  <li className={styles.dropdownWrapper}>
                    <div className={styles.languageControl}>
                      <span>EN</span>
                      <ArrowIcon />
                    </div>
                    <ul>
                      <li>
                        <button type="button">RU</button>
                      </li>
                      <li>
                        <button type="button">RU</button>
                      </li>
                      <li>
                        <button type="button">RU</button>
                      </li>
                      <li>
                        <button type="button">RU</button>
                      </li>
                      <li>
                        <button type="button">RU</button>
                      </li>
                      <li>
                        <button type="button">RU</button>
                      </li>
                      <li>
                        <button type="button">RU</button>
                      </li>
                      <li>
                        <button type="button">RU</button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </menu>
          </div>
          <div className={styles.footerSocials}>
            <Link href="#" target="_blank">
              <LinkedInIcon />
            </Link>
            <Link href="#" target="_blank">
              <TwiiterIcon />
            </Link>
            <Link href="#" target="_blank">
              <FacebookIcon />
            </Link>
            <Link href="#" target="_blank">
              <InstagramIcon />
            </Link>
          </div>
          <div className={styles.footerDocumens}>
            <Link href="#">Support</Link>
            <Link href="#">Privary</Link>
          </div>
        </div>
        <div className={styles.footerCopyRight}>
          <Text as="p">
            <CopyrightIcon />
            Copyright
          </Text>
          <Text as="p">
            Design By:
            <Link href="#" target="_blank">
              Mosheni Studio
            </Link>
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
