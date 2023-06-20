import React from 'react';

export type TINvesTonus = {
  title: string;
  info: string;
  icon: React.FC;
};

export type TDetails = {
  detailsPhase: string;
  imageSketch: React.FC;
  title: string;
  description: string;
  phaseDeliverablesTitle: string;
  phaseDeliverables: string[];
  ellipseSvg: React.FC;
};
