export type TCalculatorModes = 'simple' | 'multiple';

export type TCalculatorCurrentElement = {
  key: string;
  title: string;
  mode: TCalculatorModes;
  values: string[] | number[];
  defaultIndex?: number;
  requiere: boolean;
};

export type TCalculatorTypes = 'basic' | 'advanced';

export type TCalculator = Record<TCalculatorTypes, Array<TCalculatorCurrentElement[]>>;
