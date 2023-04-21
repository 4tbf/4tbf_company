import { object, string } from 'yup';
import { TCalculatorCurrentElement } from '../constants_types/calculator.types';

export const useAdvancedCalculator = (values: Array<TCalculatorCurrentElement[]>, t) => {
  const merged = values.flat(1);
  const iitialValues = {};
  const validationSchem = object({
    number_of_pages: string().required('Requiered'),
    copywrite: string().required('Requiered'),
    auth: string().required('Requiered'),
    styled_of_design: string().required('Requiered'),
    logo: string().required('Requiered'),
    animation: string().required('Requiered'),
    mobile_tablet: string().required('Requiered'),
    db_integration: string().required('Requiered'),
    livetime_actions: string().required('Requiered'),
    day_scheduling: string().required('Requiered'),
    mail_sender: string().required('Requiered'),
    e_commerece: string().required('Requiered'),
    items_filtrations_categories: string().required('Requiered'),
    checkout: string().required('Requiered'),
    forms_emails: string().required('Requiered'),
    different_roles: string().required('Requiered'),
    images: string().required('Requiered'),
    blog_reviews: string().required('Requiered'),
    third_part: string().required('Requiered'),
    admin_panel: string().required('Requiered'),
    multy_lang: string().required('Requiered'),
    cms: string().required('Requiered'),
    seo: string().required('Requiered'),
    metrica: string().required('Requiered'),
    webvisor: string().required('Requiered'),
    support: string().required('Requiered'),
    error_loger: string().required('Requiered'),
    protection: string().required('Requiered'),
  });
  merged.forEach((current) => {
    const defaultValue =
      typeof current.defaultIndex === 'number' ? current.values[current.defaultIndex] : undefined;
    iitialValues[current.key] = defaultValue.includes('.') ? t(defaultValue) : defaultValue;
  });
  return {
    iitialValues,
    validationSchem,
  };
};
