import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import ym from 'react-yandex-metrika';
import styles from './Footer.module.scss';
import ArrowIcon from '../../svgs/ArrowIcon';
import LinkedInIcon from '../../svgs/LinkedInIcon';
import TwiiterIcon from '../../svgs/TwiiterIcon';
import FacebookIcon from '../../svgs/FacebookIcon';
import InstagramIcon from '../../svgs/InstagramIcon';
import CopyrightIcon from '../../svgs/CopyrightIcon';
import Text from '../../../features/atoms/text';
import LogoIcon from '../../svgs/LogoIcon';
import { blank } from '../../../utils/blank';

const LANGS = [
  {
    locale: 'ru',
    title: 'Русский',
  },
  {
    locale: 'en',
    title: 'English',
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

const Footer = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const changeLang = (locale: string) => {
    if (locale === 'ru') {
      ym('reachGoal', 'lang_ru');
    }
    router.push(router.pathname, null, { locale });
  };
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerMainRow}>
          <div className={styles.footerHeader}>
            <LogoIcon />
          </div>
          <div className={styles.footerMenu}>
            <menu>
              <Link className={styles.footerLinks} href="/why-we">
                <span>{t('header.footer.whywe')}</span>
              </Link>
              <Link className={styles.footerLinks} href="/services">
                <span>{t('header.footer.services')}</span>
              </Link>
              <Link className={styles.footerLinks} href="/case-studies">
                <span>{t('header.footer.case')}</span>
              </Link>
              <div className={styles.footerLinks}>
                <ul className={styles.footerLanguage}>
                  <li className={styles.dropdownWrapper}>
                    <div className={styles.languageControl}>
                      <span style={{ textTransform: 'none' }}>{t('header.footer.calc')}</span>
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
              <Link className={styles.footerLinks} href="/about">
                <span>{t('header.footer.about')}</span>
              </Link>
              <Link className={styles.footerLinks} href="/contact-us">
                <span>{t('header.footer.contact')}</span>
              </Link>
              <div className={styles.footerLinks}>
                <ul className={styles.footerLanguage}>
                  <li className={styles.dropdownWrapper}>
                    <div className={styles.languageControl}>
                      <span>{i18n && i18n.options && i18n.options.lng}</span>
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
            </menu>
          </div>
          <div className={styles.footerSocials}>
            <div onClick={() => blank('https://www.linkedin.com/company/93818519')}>
              <LinkedInIcon />
            </div>
            <div onClick={() => blank('https://twitter.com/4tbf_company')}>
              <TwiiterIcon />
            </div>
            <div
              onClick={() =>
                blank('https://www.facebook.com/people/4The-Bright-Future/100091433303988')
              }
            >
              <FacebookIcon />
            </div>
            <div onClick={() => blank('https://www.instagram.com/4the.brightfuture')}>
              <InstagramIcon />
            </div>
          </div>
          {/* <div className={styles.footerDocumens}>
            <Link href="#">Support</Link>
            <Link href="#">Privary</Link>
          </div> */}
        </div>
        <div className={styles.footerCopyRight}>
          <Text as="p">
            <CopyrightIcon />
            Copyright 2023 4TBF
          </Text>
          {/* <Text as="p">
            Design By:
            <Link href="#" target="_blank">
              Mosheni Studio
            </Link>
          </Text> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
