import { TCalculator } from './calculator.types';

export const CALCULATOR: TCalculator = {
  basic: [
    [
      {
        key: 'number_of_pages',
        title: 'Number of pages',
        description: 'Please select the approximate number of pages your application should have.',
        mode: 'multiple',
        values: ['1 – 5', '5-15', '15-30', 'Unlimited'],
        defaultIndex: 0,
        requiere: true,
        prices: [1000, 2000, 3000, 4000],
        stepName: 'Pages',
      },
      {
        key: 'pages_copywrite',
        title: 'Copywriting of pages',
        description: 'Select the part of the pages that need copywriting',
        mode: 'multiple',
        values: ['None', 'Partly', 'All pages'],
        requiere: true,
        defaultIndex: 0,
        prices: [0, 500, 1000],
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
        prices: [0, 1000, 1500, 2500, 4000],
        stepName: 'Design and Logo',
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
        prices: [0, 200, 400],
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
        prices: [0, 1000, 2000, 3000],
        stepName: 'Database and Forms',
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
        prices: [0, 500, 1000],
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
        prices: [0, 1000, 1500, 2000],
        stepName: 'Integrations',
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
        prices: [0, 500, 1000],
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
        prices: [1000, 0],
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
        prices: [1000, 2000, 3000, 4000],
        stepName: 'Fundamental Points',
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
        prices: [0, 500, 1000],
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
        prices: [0, 500, 1000, 1500],
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
        prices: [0, 1000, 1500, 2500, 4000],
        stepName: 'Design',
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
        prices: [0, 200, 400],
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
        prices: [0, 500, 1000, 3000],
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
        prices: [500, 0],
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
        prices: [0, 1000, 2000, 3000],
        stepName: 'Database Implementation',
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
        prices: [0, 750, 1500],
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
        prices: [0, 500, 1000],
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
        prices: [0, 500, 1000],
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
        prices: [0, 1000, 1500, 2000],
        stepName: 'E-Commerce',
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
        prices: [0, 350, 700],
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
        prices: [0, 500, 1000],
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
        prices: [0, 500, 1000],
        stepName: 'Services',
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
        prices: [0, 500, 1000],
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
        prices: [0, 500, 1000],
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
        prices: [0, 1500, 3000],
        stepName: 'Features',
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
        prices: [400, 0],
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
        prices: [0, 500, 1000],
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
        prices: [1000, 0],
        stepName: 'SEO and Analytics',
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
        prices: [500, 0],
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
        prices: [500, 0],
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
        stepName: 'Support',
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
        prices: [500, 0],
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
        prices: [500, 0],
      },
    ],
  ],
};
