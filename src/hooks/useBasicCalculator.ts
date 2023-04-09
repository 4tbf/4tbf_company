import { object, string } from 'yup';
import { TCalculatorCurrentElement } from '../constants_types/calculator.types';

export const useBasicCalculator = (values: Array<TCalculatorCurrentElement[]>) => {
  const merged = values.flat(1);
  const iitialValues = {};
  const validationSchem = object({
    number_of_pages: string().required('Requiered'),
    pages_copywrite: string().required('Requiered'),
    styled_of_design: string().required('Requiered'),
    logo: string().required('Requiered'),
    db_integration: string().required('Requiered'),
    form_email: string().required('Requiered'),
    e_commerece: string().required('Requiered'),
    cms: string().required('Requiered'),
    seo: string().required('Requiered'),
  });
  merged.forEach((current) => {
    const defaultValue =
      typeof current.defaultIndex === 'number' ? current.values[current.defaultIndex] : undefined;
    iitialValues[current.key] = defaultValue;
  });
  return {
    iitialValues,
    validationSchem,
  };
};
