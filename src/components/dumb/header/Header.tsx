import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import styles from './Header.module.scss';
import ArrowIcon from '../../svgs/ArrowIcon';
import LogoIcon from '../../svgs/LogoIcon';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import BurgerIcon from '../../svgs/BurgerIcon';

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
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = useCallback(() => {
    setIsBurgerOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isBurgerOpen]);

  const router = useRouter();
  const tablet = useMediaQuery('(max-width: 1279.98px)');
  const changeLang = (locale: string) => {
    router.push(router.pathname, null, { locale });
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Link href="/">
              <LogoIcon />
            </Link>
          </div>
          <nav className={clsx({ [styles.menuOpen]: isBurgerOpen })}>
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
          {tablet && (
            <div
              onClick={handleBurgerClick}
              className={clsx(styles.burgerItem, {
                [styles.open]: isBurgerOpen,
              })}
            >
              <BurgerIcon />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
