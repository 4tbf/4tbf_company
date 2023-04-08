import { TCalculator } from './calculator.types';

export const CALCULATOR: TCalculator = {
  basic: [
    [
      {
        key: 'number_of_pages',
        title: 'Number of pages',
        mode: 'multiple',
        values: ['1 – 5', '5-15', '15-30', 'unlimited'],
        defaultIndex: 0,
        requiere: true,
      },
      {
        key: 'pages_copywrite',
        title: 'Pages Copywriting',
        mode: 'multiple',
        values: ['None', 'partly', 'all pages'],
        requiere: false,
      },
    ],
    [
      {
        key: 'styled_of_design',
        title: 'Style of design',
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
      },
      {
        key: 'logo',
        title: 'Logo',
        mode: 'multiple',
        values: ['Not need', 'Basic logo', 'Modern logo'],
        requiere: false,
      },
    ],
    [
      {
        key: 'db_integration',
        title: 'Database integration',
        mode: 'multiple',
        values: ['None', 'Basic', 'Advanced', 'Full development'],
        requiere: false,
      },
      {
        key: 'form_email',
        title: 'Forms and emails',
        mode: 'multiple',
        values: ['Not need', 'Basic', 'hard'],
        defaultIndex: 1,
        requiere: true,
      },
    ],
    [
      {
        key: 'e_commerece',
        title: 'E-Commerce',
        mode: 'multiple',
        values: ['Not need', '5-25 items', '25 – 100 Items', '100 + items'],
        requiere: false,
      },
      {
        key: 'cms',
        title: 'CMS integration',
        mode: 'multiple',
        values: ['Not need', 'partly', 'fully'],
        requiere: false,
      },
      {
        key: 'seo',
        title: 'SEO',
        mode: 'simple',
        values: ['yes', 'no'],
        defaultIndex: 0,
        requiere: true,
      },
    ],
  ],
  advanced: [],
};
