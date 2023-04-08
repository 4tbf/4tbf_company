import React from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import ArrowIcon from '../../svgs/ArrowIcon';

const LANGS = [
  {
    locale: 'ru',
    title: 'Русский',
  },
  {
    locale: 'en',
    title: 'English',
  },
  {
    locale: 'de',
    title: 'German',
  },
  {
    locale: 'es',
    title: 'Spain',
  },
  {
    locale: 'fr',
    title: 'French',
  },
  {
    locale: 'zh',
    title: 'Chiness',
  },
];
const Header = () => {
  const router = useRouter();
  const changeLang = (locale: string) => {
    router.push(router.pathname, null, { locale });
  };
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
                    {LANGS.map((curr) => {
                      return (
                        <li key={curr.locale}>
                          <button onClick={() => changeLang(curr.locale)} type="button">
                            {curr.title}
                          </button>
                        </li>
                      );
                    })}
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
