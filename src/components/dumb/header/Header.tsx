import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import ym from 'react-yandex-metrika';
import styles from './Header.module.scss';
import ArrowIcon from '../../svgs/ArrowIcon';
import LogoIcon from '../../svgs/LogoIcon';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import BurgerIcon from '../../svgs/BurgerIcon';
import useOutsideClick from '../../../hooks/useOutsideClick';

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
  const [opened, setOpened] = useState('');
  const handleBurgerClick = useCallback(() => {
    setIsBurgerOpen((prev) => !prev);
  }, []);

  useEffect(() => {
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
  const changeLanguage = async (curr) => {
    changeLang(curr.locale);
    setCurrLang(curr.locale);
  };

  const router = useRouter();
  const tablet = useMediaQuery('(max-width: 1279.98px)');
  const mobile = useMediaQuery('(max-width: 767.98px)');
  const changeLang = (locale: string) => {
    if (locale === 'ru') {
      ym('reachGoal', 'lang_ru');
    }
    router.push(router.pathname, null, { locale });
  };

  const handleClickOutside = () => {};

  const handleOutsideClick = (event) => {
    if (
      (calcRef.current && calcRef.current.contains(event.target)) ||
      (langRef.current && langRef.current.contains(event.target))
    ) {
      return;
    }
    setOpened('');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const calcRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  useOutsideClick([calcRef, langRef], handleClickOutside);
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
            <div
              className={styles.headerLinks}
              onClick={() => {
                setOpened((prevState) => (prevState === 'calc' ? '' : 'calc'));
              }}
              ref={calcRef}
            >
              <ul className={styles.headerLanguage}>
                <li className={styles.dropdownWrapper}>
                  <div className={styles.languageControl}>
                    <span>{t('header.footer.calc')}</span>
                    <span
                      className={styles.arrowIcon}
                      style={{
                        transform:
                          opened === 'calc' && (tablet || mobile) ? 'rotate(180deg)' : 'none',
                      }}
                    >
                      <ArrowIcon />
                    </span>
                  </div>
                  {opened === 'calc' && (tablet || mobile) && (
                    <ul>
                      <li>
                        <Link href="/calculator/basic" onClick={() => setIsBurgerOpen(false)}>
                          <span>{t('header.footer.calc.basic')}</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/calculator/advanced" onClick={() => setIsBurgerOpen(false)}>
                          <span>{t('header.footer.calc.advanced')}</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                  {!(tablet || mobile) && (
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
                  )}
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
            <div
              className={styles.headerLinks}
              onClick={() => {
                setOpened((prevState) => (prevState === 'languages' ? '' : 'languages'));
              }}
              ref={langRef}
            >
              <ul className={styles.headerLanguage}>
                <li className={styles.dropdownWrapper}>
                  <div className={styles.languageControl} style={{ textTransform: 'uppercase' }}>
                    <span>{i18n && i18n.options && i18n.options.lng}</span>
                    <span
                      className={styles.arrowIcon}
                      style={{
                        transform:
                          opened === 'languages' && (tablet || mobile) ? 'rotate(180deg)' : 'none',
                      }}
                    >
                      <ArrowIcon />
                    </span>
                  </div>
                  {opened === 'languages' && (tablet || mobile) && (
                    <ul>
                      {LANGS.map((curr) => {
                        return (
                          <li key={curr.locale}>
                            <button
                              onClick={() => {
                                changeLanguage(curr);
                                setIsBurgerOpen(false);
                              }}
                              type="button"
                            >
                              {curr.title}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {!(tablet || mobile) && (
                    <ul>
                      {LANGS.map((curr) => {
                        return (
                          <li key={curr.locale}>
                            <button
                              onClick={() => {
                                changeLanguage(curr);
                                setIsBurgerOpen(false);
                              }}
                              type="button"
                            >
                              {curr.title}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
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
