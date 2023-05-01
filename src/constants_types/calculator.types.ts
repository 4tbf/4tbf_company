export type TCalculatorModes = 'simple' | 'multiple';

export type TCalculatorCurrentElement = {
  key: string;
  title: string;
  description: string;
  mode: TCalculatorModes;
  values: string[];
  defaultIndex?: number;
  requiere: boolean;
  prices: number[];
  stepName?: string;
  tooltipText?: string;
};

export type TCalculatorTypes = 'basic' | 'advanced';

export type TCalculator = Record<TCalculatorTypes, Array<TCalculatorCurrentElement[]>>;
