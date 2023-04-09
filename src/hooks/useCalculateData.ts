import { TCalculatorCurrentElement } from '../constants_types/calculator.types';

export const useCalculateData = (
  values: Record<string, string>,
  calculationData: Array<TCalculatorCurrentElement[]>
) => {
  const merged = calculationData.flat(1);
  let finalCost = 0;

  merged.forEach((current) => {
    const submitedValue: string = values[current.key];
    const indexOfSumbition = current.values.indexOf(submitedValue);
    finalCost += Number(current.prices[indexOfSumbition]);
  });
  return finalCost;
};
