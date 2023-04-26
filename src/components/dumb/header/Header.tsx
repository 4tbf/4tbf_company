import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import styles from './Header.module.scss';
import ArrowIcon from '../../svgs/ArrowIcon';
import LogoIcon from '../../svgs/LogoIcon';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import BurgerIcon from '../../svgs/BurgerIcon';

const LANGS = [
  {
    locale: 'en',
    title: 'English',
  },
  {
    locale: 'ru',
    title: 'Русский',
  },

  // {
  //   locale: 'de',
  //   title: 'German',
  // },
  // {
  //   locale: 'es',
  //   title: 'Spain',
  // },
  // {
  //   locale: 'fr',
  //   title: 'French',
  // },
  // {
  //   locale: 'zh',
  //   title: 'Chiness',
  // },
];
const Header = () => {
  const { t, i18n } = useTranslation();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [currLang, setCurrLang] = useState('');
  const handleBurgerClick = useCallback(() => {
    setIsBurgerOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    console.log(currLang);
    if (Boolean(currLang) && router.pathname.includes('calculator')) {
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }, [currLang]);

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
            <Link className={styles.headerLinks} href="/why-we">
              <span>{t('header.footer.whywe')}</span>
            </Link>
            <Link className={styles.headerLinks} href="/services">
              <span>{t('header.footer.services')}</span>
            </Link>
            <Link className={styles.headerLinks} href="/case-studies">
              <span>{t('header.footer.case')}</span>
            </Link>
            <div className={styles.headerLinks}>
              <ul className={styles.headerLanguage}>
                <li className={styles.dropdownWrapper}>
                  <div className={styles.languageControl}>
                    <span>{t('header.footer.calc')}</span>
                    <ArrowIcon />
                  </div>
                  <ul>
                    <li>
                      <Link href="/calculator/basic">
                        <span>{t('header.footer.calc.basic')}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/calculator/advanced">
                        <span>{t('header.footer.calc.advanced')}</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <Link className={styles.headerLinks} href="#">
              <span> Cost Calculator</span>
            </Link> */}
            <Link className={styles.headerLinks} href="/about">
              <span>{t('header.footer.about')}</span>
            </Link>
            <Link className={styles.headerLinks} href="/contact-us">
              <span>{t('header.footer.contact')}</span>
            </Link>
            <div className={styles.headerLinks}>
              <ul className={styles.headerLanguage}>
                <li className={styles.dropdownWrapper}>
                  <div className={styles.languageControl} style={{ textTransform: 'uppercase' }}>
                    <span>{i18n && i18n.options && i18n.options.lng}</span>
                    <ArrowIcon />
                  </div>
                  <ul>
                    {LANGS.map((curr) => {
                      return (
                        <li key={curr.locale}>
                          <button
                            onClick={async () => {
                              changeLang(curr.locale);
                              setCurrLang(curr.locale);
                            }}
                            type="button"
                          >
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
