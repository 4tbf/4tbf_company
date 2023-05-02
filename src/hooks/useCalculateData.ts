import { TCalculatorCurrentElement } from '../constants_types/calculator.types';

export const useCalculateData = (
  values: Record<string, string>,
  calculationData: Array<TCalculatorCurrentElement[]>,
  t: any
) => {
  const merged = calculationData.flat(1);
  let finalCost = 0;

  merged.forEach((current) => {
    const submitedValue: string = values[current.key];
    const translated = current.values.map((cur) => t(cur));
    const indexOfSumbition = translated.indexOf(submitedValue);
    finalCost += Number(current.prices[indexOfSumbition]);
  });
  return finalCost;
};
