import { TCalculator } from './calculator.types';

export const CALCULATOR: TCalculator = {
  basic: [
    [
      {
        key: 'number_of_pages',
        title: 'caclculator.basic.step.1.pages.title',
        description: 'caclculator.basic.step.1.pages.subtitle',
        mode: 'multiple',
        values: ['1 – 5', '5 - 15', '15 - 30', 'caclculator.basic.step.1.pages.values.unlimited'],
        defaultIndex: 0,
        requiere: true,
        prices: [1000, 2000, 3000, 4000],
        stepName: 'caclculator.basic.step.1.stepName',
        tooltipText: 'caclculator.basic.step.1.pages.description',
      },
      {
        key: 'pages_copywrite',
        title: 'caclculator.basic.step.1.copywrite.title',
        description: 'caclculator.basic.step.1.copywrite.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.basic.step.1.copywrite.values.none',
          'caclculator.basic.step.1.copywrite.values.partly',
          'caclculator.basic.step.1.copywrite.values.all',
        ],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 500, 1000],
        tooltipText: 'caclculator.basic.step.1.copywrite.description',
      },
    ],
    [
      {
        key: 'styled_of_design',
        title: 'caclculator.basic.step.2.design.title',
        description: 'caclculator.basic.step.2.design.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.basic.step.2.design.values.no',
          'caclculator.basic.step.2.design.values.simple',
          'caclculator.basic.step.2.design.values.moderatly',
          'caclculator.basic.step.2.design.values.highend',
          'caclculator.basic.step.2.design.values.worldclass',
        ],
        defaultIndex: 1,
        requiere: true,
        prices: [0, 1000, 1500, 2500, 4000],
        stepName: 'caclculator.basic.step.2.stepName',
        tooltipText: 'caclculator.basic.step.2.design.description',
      },
      {
        key: 'logo',
        title: 'caclculator.basic.step.2.logo.title',
        description: 'caclculator.basic.step.2.logo.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.basic.step.2.logo.values.no',
          'caclculator.basic.step.2.logo.values.basic',
          'caclculator.basic.step.2.logo.values.modern',
        ],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 200, 400],
        tooltipText: 'caclculator.basic.step.2.logo.description',
      },
    ],
    [
      {
        key: 'db_integration',
        title: 'caclculator.basic.step.3.db.title',
        description: 'caclculator.basic.step.3.db.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.basic.step.3.db.values.no',
          'caclculator.basic.step.3.db.values.basic',
          'caclculator.basic.step.3.db.values.advanced',
          'caclculator.basic.step.3.db.values.full',
        ],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 1000, 2000, 3000],
        stepName: 'caclculator.basic.step.3.stepName',
        tooltipText: 'caclculator.basic.step.3.db.description',
      },
      {
        key: 'form_email',
        title: 'caclculator.basic.step.3.form.title',
        description: 'caclculator.basic.step.3.form.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.basic.step.3.form.values.no',
          'caclculator.basic.step.3.form.values.basic',
          'caclculator.basic.step.3.form.values.hard',
        ],
        defaultIndex: 1,
        requiere: true,
        prices: [0, 500, 1000],
        tooltipText: 'caclculator.basic.step.3.form.description',
      },
    ],
    [
      {
        key: 'e_commerece',
        title: 'caclculator.basic.step.4.commerce.title',
        description: 'caclculator.basic.step.4.commerce.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.basic.step.4.commerce.values.no',
          'caclculator.basic.step.4.commerce.values.5to12',
          'caclculator.basic.step.4.commerce.values.25to100',
          'caclculator.basic.step.4.commerce.values.100plus',
        ],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 1000, 1500, 2000],
        stepName: 'caclculator.basic.step.4.stepName',
        tooltipText: 'caclculator.basic.step.4.commerce.description',
      },
      {
        key: 'cms',
        title: 'caclculator.basic.step.4.cms.title',
        description: 'caclculator.basic.step.4.cms.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.basic.step.4.cms.values.no',
          'caclculator.basic.step.4.cms.values.partly',
          'caclculator.basic.step.4.cms.values.full',
        ],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 500, 1000],
        tooltipText: 'caclculator.basic.step.4.cms.description',
      },
      {
        key: 'seo',
        title: 'caclculator.basic.step.4.seo.title',
        description: 'caclculator.basic.step.4.seo.subtitle',
        mode: 'simple',
        values: [
          'caclculator.basic.step.4.seo.values.yes',
          'caclculator.basic.step.4.seo.values.no',
        ],
        defaultIndex: 0,
        requiere: true,
        prices: [1000, 0],
        tooltipText: 'caclculator.basic.step.4.seo.description',
      },
    ],
  ],
  advanced: [
    [
      {
        key: 'number_of_pages',
        title: 'caclculator.advanced.step.1.pages.title',
        description: 'caclculator.advanced.step.1.pages.subtitle',
        mode: 'multiple',
        values: ['1 – 5', '5 – 15', '15 -30', 'caclculator.advanced.step.1.pages.values.unlimited'],
        defaultIndex: 0,
        requiere: true,
        prices: [1000, 2000, 3000, 4000],
        stepName: 'caclculator.advanced.step.1.stepName',
        tooltipText: 'caclculator.advanced.step.1.pages.description',
      },
      {
        key: 'copywrite',
        title: 'caclculator.advanced.step.1.copywrite.title',
        description: 'caclculator.advanced.step.1.copywrite.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.advanced.step.1.copywrite.values.none',
          'caclculator.advanced.step.1.copywrite.values.partly',
          'caclculator.advanced.step.1.copywrite.values.all',
        ],
        defaultIndex: 0,
        requiere: true,
        prices: [0, 500, 1000],
        tooltipText: 'caclculator.advanced.step.1.copywrite.description',
      },
      {
        key: 'auth',
        title: 'caclculator.advanced.step.1.auth.title',
        description: 'caclculator.advanced.step.1.auth.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.advanced.step.1.auth.values.none',
          'caclculator.advanced.step.1.auth.values.basic',
          'caclculator.advanced.step.1.auth.values.hard',
          'Web3',
        ],
        defaultIndex: 0,
        requiere: true,
        prices: [0, 500, 1000, 1500],
        tooltipText: 'caclculator.advanced.step.1.auth.description',
      },
    ],
    [
      {
        key: 'styled_of_design',
        title: 'caclculator.advanced.step.2.design.title',
        description: 'caclculator.advanced.step.2.design.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.advanced.step.2.design.values.no',
          'caclculator.advanced.step.2.design.values.simple',
          'caclculator.advanced.step.2.design.values.moderatly',
          'caclculator.advanced.step.2.design.values.highend',
          'caclculator.advanced.step.2.design.values.worldclass',
        ],
        defaultIndex: 1,
        requiere: true,
        prices: [0, 1000, 1500, 2500, 4000],
        stepName: 'caclculator.advanced.step.2.stepName',
        tooltipText: 'caclculator.advanced.step.2.design.description',
      },
      {
        key: 'logo',
        title: 'caclculator.advanced.step.2.logo.title',
        description: 'caclculator.advanced.step.2.logo.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.advanced.step.2.logo.values.no',
          'caclculator.advanced.step.2.logo.values.basic',
          'caclculator.advanced.step.2.logo.values.modern',
        ],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 200, 400],
        tooltipText: 'caclculator.advanced.step.2.logo.description',
      },
      {
        key: 'animation',
        title: 'caclculator.advanced.step.2.animation.title',
        description: 'caclculator.advanced.step.2.animation.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.advanced.step.2.animation.values.no',
          'caclculator.advanced.step.2.animation.values.basic',
          'caclculator.advanced.step.2.animation.values.modern',
          'caclculator.advanced.step.2.animation.values.extrahard',
        ],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 500, 1000, 3000],
      },
      {
        key: 'mobile_tablet',
        title: 'caclculator.advanced.step.2.mobile.title',
        description: 'caclculator.advanced.step.2.mobile.subtitle',
        mode: 'simple',
        values: ['calculator.global.yes', 'calculator.global.no'],
        defaultIndex: 0,
        requiere: true,
        prices: [500, 0],
        tooltipText: 'caclculator.advanced.step.2.mobile.description',
      },
    ],
    [
      {
        key: 'db_integration',
        title: 'caclculator.advanced.step.3.database.title',
        description: 'caclculator.advanced.step.3.database.subtitle',
        mode: 'multiple',
        values: [
          'calculator.global.notneed',
          'calculator.global.basic',
          'caclculator.advanced.step.3.database.values.advanced',
          'caclculator.advanced.step.3.database.values.full',
        ],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 1000, 2000, 3000],
        stepName: 'caclculator.advanced.step.3.stepName',
        tooltipText: 'caclculator.advanced.step.3.database.description',
      },
      {
        key: 'livetime_actions',
        title: 'caclculator.advanced.step.3.livetime.title',
        description: 'caclculator.advanced.step.3.livetime.subtitle',
        mode: 'multiple',
        values: ['calculator.global.notneed', 'calculator.global.basic', 'calculator.global.hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 750, 1500],
        tooltipText: 'caclculator.advanced.step.3.livetime.description',
      },
      {
        key: 'day_scheduling',
        title: 'caclculator.advanced.step.3.daysceduling.title',
        description: 'caclculator.advanced.step.3.daysceduling.subtitle',
        mode: 'multiple',
        values: ['calculator.global.notneed', 'calculator.global.basic', 'calculator.global.hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 500, 1000],
      },
      {
        key: 'mail_sender',
        title: 'caclculator.advanced.step.3.emailsender.title',
        description: 'caclculator.advanced.step.3.emailsender.subtitle',
        mode: 'multiple',
        values: ['calculator.global.notneed', 'calculator.global.basic', 'calculator.global.hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 500, 1000],
      },
    ],
    [
      {
        key: 'e_commerece',
        title: 'caclculator.advanced.step.4.commerce.title',
        description: 'caclculator.advanced.step.4.commerce.subtitle',
        mode: 'multiple',
        values: [
          'caclculator.advanced.step.4.commerce.values.no',
          'caclculator.advanced.step.4.commerce.values.5to12',
          'caclculator.advanced.step.4.commerce.values.25to100',
          'caclculator.advanced.step.4.commerce.values.100plus',
        ],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 1000, 1500, 2000],
        stepName: 'caclculator.advanced.step.4.stepName',
        tooltipText: 'caclculator.advanced.step.4.commerce.description',
      },
      {
        key: 'items_filtrations_categories',
        title: 'caclculator.advanced.step.4.filtrations.title',
        description: 'caclculator.advanced.step.4.filtrations.subtitle',
        mode: 'multiple',
        values: ['calculator.global.notneed', 'calculator.global.basic', 'calculator.global.hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 350, 700],
        tooltipText: 'caclculator.advanced.step.4.filtrations.description',
      },
      {
        key: 'checkout',
        title: 'caclculator.advanced.step.4.checkout.title',
        description: 'caclculator.advanced.step.4.checkout.subtitle',
        mode: 'multiple',
        values: ['calculator.global.notneed', 'calculator.global.basic', 'calculator.global.hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 500, 1000],
        tooltipText: 'caclculator.advanced.step.4.checkout.description',
      },
    ],
    [
      {
        key: 'forms_emails',
        title: 'caclculator.advanced.step.5.form.title',
        description: 'caclculator.advanced.step.5.form.subtitle',
        mode: 'multiple',
        values: ['calculator.global.notneed', 'calculator.global.basic', 'calculator.global.hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 500, 1000],
        stepName: 'caclculator.advanced.step.5.stepName',
        tooltipText: 'caclculator.advanced.step.5.form.description',
      },
      {
        key: 'different_roles',
        title: 'caclculator.advanced.step.5.roles.title',
        description: 'caclculator.advanced.step.5.roles.subtitle',
        mode: 'multiple',
        values: ['calculator.global.notneed', 'calculator.global.basic', 'calculator.global.hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 500, 1000],
      },
      {
        key: 'images',
        title: 'caclculator.advanced.step.5.images.title',
        mode: 'multiple',
        values: ['calculator.global.notneed', 'calculator.global.basic', 'calculator.global.hard'],
        description: 'caclculator.advanced.step.5.images.subtitle',
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
        tooltipText: 'caclculator.advanced.step.5.images.description',
      },
      {
        key: 'blog_reviews',
        title: 'caclculator.advanced.step.5.blogreview.title',
        description: 'caclculator.advanced.step.5.blogreview.subtitle',
        mode: 'multiple',
        values: ['calculator.global.notneed', 'calculator.global.basic', 'calculator.global.hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
        tooltipText: 'caclculator.advanced.step.5.blogreview.description',
      },
      {
        key: 'third_part',
        title: 'caclculator.advanced.step.5.thirdpart.title',
        description: 'caclculator.advanced.step.5.thirdpart.subtitle',
        mode: 'multiple',
        values: ['calculator.global.notneed', 'calculator.global.basic', 'calculator.global.hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 500, 1000],
      },
    ],
    [
      {
        key: 'admin_panel',
        title: 'caclculator.advanced.step.6.adminpanel.title',
        description: 'caclculator.advanced.step.6.adminpanel.subtitle',
        mode: 'multiple',
        values: ['calculator.global.notneed', 'calculator.global.basic', 'calculator.global.hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 1500, 3000],
        stepName: 'caclculator.advanced.step.6.stepName',
        tooltipText: 'caclculator.advanced.step.6.adminpanel.description',
      },
      {
        key: 'multy_lang',
        title: 'caclculator.advanced.step.6.multilanguage.title',
        description: 'caclculator.advanced.step.6.multilanguage.description',
        mode: 'simple',
        values: ['calculator.global.yes', 'calculator.global.no'],
        defaultIndex: 0,
        requiere: true,
        prices: [400, 0],
      },
      {
        key: 'cms',
        title: 'caclculator.advanced.step.6.cms.title',
        description: 'caclculator.advanced.step.6.cms.subtitle',
        mode: 'multiple',
        values: [
          'calculator.global.notneed',
          'caclculator.advanced.step.6.cms.values.partly',
          'caclculator.advanced.step.6.cms.values.fully',
        ],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 500, 1000],
        tooltipText: 'caclculator.advanced.step.6.cms.description',
      },
    ],
    [
      {
        key: 'seo',
        title: 'caclculator.advanced.step.7.seo.title',
        description: 'caclculator.advanced.step.7.seo.subtitle',
        mode: 'simple',
        values: ['calculator.global.yes', 'calculator.global.no'],
        defaultIndex: 0,
        requiere: true,
        prices: [1000, 0],
        stepName: 'caclculator.advanced.step.7.stepName',
        tooltipText: 'caclculator.advanced.step.7.seo.description',
      },
      {
        key: 'metrica',
        title: 'caclculator.advanced.step.7.metric.title',
        description: 'caclculator.advanced.step.7.metric.subtitle',
        mode: 'simple',
        values: ['calculator.global.yes', 'calculator.global.no'],
        defaultIndex: 0,
        requiere: true,
        prices: [500, 0],
        tooltipText: 'caclculator.advanced.step.7.metric.description',
      },
      {
        key: 'webvisor',
        title: 'caclculator.advanced.step.7.webvisor.title',
        description: 'caclculator.advanced.step.7.webvisor.subtitle',
        mode: 'simple',
        values: ['calculator.global.yes', 'calculator.global.no'],
        defaultIndex: 0,
        requiere: true,
        prices: [500, 0],
        tooltipText: 'caclculator.advanced.step.7.webvisor.description',
      },
    ],
    [
      {
        key: 'support',
        title: 'caclculator.advanced.step.8.support.title',
        description: 'caclculator.advanced.step.8.support.subtitle',
        mode: 'multiple',
        values: [
          'calculator.global.notneed',
          'caclculator.advanced.step.8.support.values.part',
          '24/7',
        ],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
        stepName: 'caclculator.advanced.step.8.stepName',
        tooltipText: 'caclculator.advanced.step.8.support.description',
      },
      {
        key: 'error_loger',
        title: 'caclculator.advanced.step.8.error.title',
        description: 'caclculator.advanced.step.8.error.subtitle',
        mode: 'simple',
        values: ['calculator.global.yes', 'calculator.global.no'],
        defaultIndex: 0,
        requiere: true,
        prices: [500, 0],
      },
      {
        key: 'protection',
        title: 'caclculator.advanced.step.8.protection.title',
        description: 'caclculator.advanced.step.8.protection.subtitle',
        mode: 'simple',
        values: ['calculator.global.yes', 'calculator.global.no'],
        defaultIndex: 0,
        requiere: true,
        prices: [500, 0],
        tooltipText: 'caclculator.advanced.step.8.protection.description',
      },
    ],
  ],
};
