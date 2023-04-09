import React from 'react';
import Link from 'next/link';
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
            <Link className={styles.headerLinks} href="#">
              <span> Why We?</span>
            </Link>
            <Link className={styles.headerLinks} href="#">
              <span> Services</span>
            </Link>
            <Link className={styles.headerLinks} href="#">
              <span> Case Studies</span>
            </Link>
            <Link className={styles.headerLinks} href="#">
              <span> Cost Calculator</span>
            </Link>
            <Link className={styles.headerLinks} href="/about">
              <span> About Us</span>
            </Link>
            <Link className={styles.headerLinks} href="/contact-us">
              <span> Contact Us</span>
            </Link>
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
