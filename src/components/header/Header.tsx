import React from 'react';
import styles from './Header.module.scss';
import ArrowIcon from '../svgs/ArrowIcon';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.logo} />
          <nav>
            <a className={styles.headerLinks} href="#">
              <span> Why We?</span>
            </a>
            <a className={styles.headerLinks} href="#">
              <span> Services</span>
            </a>
            <a className={styles.headerLinks} href="#">
              <span> Case Studies</span>
            </a>
            <a className={styles.headerLinks} href="#">
              <span> Cost Calculator</span>
            </a>
            <a className={styles.headerLinks} href="#">
              <span> About Us</span>
            </a>
            <a className={styles.headerLinks} href="#">
              <span> Contact Us</span>
            </a>
            <div className={styles.headerLinks}>
              <ul className={styles.headerLanguage}>
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
