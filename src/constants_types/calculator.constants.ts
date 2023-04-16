import { TCalculator } from './calculator.types';

export const CALCULATOR: TCalculator = {
  basic: [
    [
      {
        key: 'number_of_pages',
        title: 'Number of pages',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['1 – 5', '5-15', '15-30', 'unlimited'],
        defaultIndex: 0,
        requiere: true,
        prices: [100, 200, 300, 1000],
      },
      {
        key: 'pages_copywrite',
        title: 'Pages Copywriting',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['None', 'partly', 'all pages'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 100, 200],
      },
    ],
    [
      {
        key: 'styled_of_design',
        title: 'Style of design',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: [
          'No design needed',
          'Simple yet attractive',
          'Moderately stylized',
          'high end',
          'world class',
        ],
        defaultIndex: 1,
        requiere: true,
        prices: [0, 100, 200, 300, 500],
      },
      {
        key: 'logo',
        title: 'Logo',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic logo', 'Modern logo'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
    ],
    [
      {
        key: 'db_integration',
        title: 'Database integration',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['None', 'Basic', 'Advanced', 'Full development'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 100, 200, 300],
      },
      {
        key: 'form_email',
        title: 'Forms and emails',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'hard'],
        defaultIndex: 1,
        requiere: true,
        prices: [0, 100, 200],
      },
    ],
    [
      {
        key: 'e_commerece',
        title: 'E-Commerce',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', '5-25 items', '25 – 100 Items', '100 + items'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 100, 200, 300],
      },
      {
        key: 'cms',
        title: 'CMS integration',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'partly', 'fully'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 100, 200],
      },
      {
        key: 'seo',
        title: 'SEO',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'simple',
        values: ['yes', 'no'],
        defaultIndex: 0,
        requiere: true,
        prices: [100, 0],
      },
    ],
  ],
  advanced: [
    [
      {
        key: 'number_of_pages',
        title: 'Number of pages',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['1 – 5', '5 – 15', '15 -30', 'unlimited'],
        defaultIndex: 0,
        requiere: true,
        prices: [100, 200, 300, 500],
      },
      {
        key: 'copywrite',
        title: 'Pages Copywriting',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['None', 'partly', 'all pages'],
        defaultIndex: 0,
        requiere: true,
        prices: [0, 200, 300],
      },
      {
        key: 'auth',
        title: ' Authorization / Registration',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'basic', 'hard', 'web3'],
        defaultIndex: 0,
        requiere: true,
        prices: [0, 200, 300, 400],
      },
    ],
    [
      {
        key: 'styled_of_design',
        title: 'Style of design',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: [
          'No design needed',
          'Simple yet attractive',
          'Moderately stylized',
          'high end',
          'world class',
        ],
        defaultIndex: 1,
        requiere: true,
        prices: [0, 100, 200, 300, 500],
      },
      {
        key: 'logo',
        title: 'Logo',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic logo', 'Modern logo'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
      {
        key: 'animation',
        title: 'Animation',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Modern', 'Extra hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500, 750],
      },
      {
        key: 'mobile_tablet',
        title: 'Mobile and tablet friendly design',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'simple',
        values: ['yes', 'no'],
        defaultIndex: 0,
        requiere: true,
        prices: [100, 0],
      },
    ],
    [
      {
        key: 'db_integration',
        title: 'Database integration',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Advanced', 'Full development'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500, 750],
      },
      {
        key: 'livetime_actions',
        title: 'Live time actions => chat, notifications',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
      {
        key: 'day_scheduling',
        title: 'Day scheduling functionality',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
      {
        key: 'mail_sender',
        title: 'Email sender functionality',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
    ],
    [
      {
        key: 'e_commerece',
        title: 'E-Commerce',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', '5-25 items', '25 – 100 Items', '100 + items'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 100, 200, 300],
      },
      {
        key: 'items_filtrations_categories',
        title: 'Items filtration and categories',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
      {
        key: 'checkout',
        title: 'Checkout',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
    ],
    [
      {
        key: 'forms_emails',
        title: 'Forms and emails',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
      {
        key: 'different_roles',
        title: 'Users with different roles',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
      {
        key: 'images',
        title: 'Images gallery',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
      {
        key: 'blog_reviews',
        title: 'Blog and Reviews',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
      {
        key: 'third_part',
        title: 'Third part services',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
    ],
    [
      {
        key: 'admin_panel',
        title: 'Custom admin panel',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
      {
        key: 'multy_lang',
        title: 'Multi language',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'simple',
        values: ['yes', 'no'],
        defaultIndex: 0,
        requiere: true,
        prices: [100, 0],
      },
      {
        key: 'cms',
        title: 'CMS integration',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'Hard'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
    ],
    [
      {
        key: 'seo',
        title: 'SEO',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'simple',
        values: ['yes', 'no'],
        defaultIndex: 0,
        requiere: true,
        prices: [100, 0],
      },
      {
        key: 'metrica',
        title: 'Metrica',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'simple',
        values: ['yes', 'no'],
        defaultIndex: 0,
        requiere: true,
        prices: [100, 0],
      },
      {
        key: 'webvisor',
        title: 'Webvisor',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'simple',
        values: ['yes', 'no'],
        defaultIndex: 0,
        requiere: true,
        prices: [100, 0],
      },
    ],
    [
      {
        key: 'support',
        title: 'Support for app',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'multiple',
        values: ['Not need', 'part of day', '24/7'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 250, 500],
      },
      {
        key: 'error_loger',
        title: 'Application errors logger',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'simple',
        values: ['yes', 'no'],
        defaultIndex: 0,
        requiere: true,
        prices: [100, 0],
      },
      {
        key: 'protection',
        title: 'Protection against intruders ',
        description:
          'Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor mi fringilla elit posuere sit proin.',
        mode: 'simple',
        values: ['yes', 'no'],
        defaultIndex: 0,
        requiere: true,
        prices: [100, 0],
      },
    ],
  ],
};
