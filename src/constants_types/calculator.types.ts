export type TCalculatorModes = 'simple' | 'multiple';

export type TCalculatorCurrentElement = {
  key: string;
  title: string;
  mode: TCalculatorModes;
  values: string[];
  defaultIndex?: number;
  requiere: boolean;
  prices: number[];
};

export type TCalculatorTypes = 'basic' | 'advanced';

export type TCalculator = Record<TCalculatorTypes, Array<TCalculatorCurrentElement[]>>;
