import DurationIconInvesTonus from '../../components/svgs/DurationIconInvesTonus';
import Ellipse from '../../components/svgs/Ellipse';
import IndustryIconInvesTonus from '../../components/svgs/IndustryIconInvesTonus';
import ProcessPhase1 from '../../components/svgs/ProcessPhase1';
import ProcessPhase2 from '../../components/svgs/ProcessPhase2';
import ProcessPhase3 from '../../components/svgs/ProcessPhase3';
import ProcessPhase4 from '../../components/svgs/ProcessPhase4';
import ProcessPhase5 from '../../components/svgs/ProcessPhase5';
import ProcessPhase6 from '../../components/svgs/ProcessPhase6';
import TechnologiesIconInvesTonus from '../../components/svgs/TechnologiesIconInvesTonus';
import TimSizeIconInvesTonus from '../../components/svgs/TimSizeIconInvesTonus';
import { TDetails, TINvesTonus } from './typesAtoms';

export const INVES_TONUS_INFO_CARD: TINvesTonus[] = [
  {
    title: 'invesTonus.infoCard.industry',
    info: 'invesTonus.infoCard.crypto',
    icon: IndustryIconInvesTonus,
  },
  {
    title: 'invesTonus.infoCard.duration',
    info: 'invesTonus.infoCard.date',
    icon: DurationIconInvesTonus,
  },
  {
    title: 'invesTonus.infoCard.teamSize',
    info: 'invesTonus.infoCard.teamNumber',
    icon: TimSizeIconInvesTonus,
  },
  {
    title: 'invesTonus.infoCard.technologies',
    info: 'invesTonus.infoCard.devLenguage',
    icon: TechnologiesIconInvesTonus,
  },
];

export const PROCESS_DETAILS: TDetails[] = [
  {
    detailsPhase: 'process.detail.phase1',
    imageSketch: ProcessPhase1,
    title: 'process.detail.onboarding',
    description: 'process.detail.onboarding.description',
    phaseDeliverablesTitle: 'process.detail.care.optimize.deliverables.title',
    phaseDeliverables: [
      'process.detail.onboarding.phase.deliverables.1',
      'process.detail.onboarding.phase.deliverables.2',
    ],
    ellipseSvg: Ellipse,
  },
  {
    detailsPhase: 'process.detail.phase2',
    imageSketch: ProcessPhase2,
    title: 'process.detail.discover',
    description: 'process.detail.discover.description',
    phaseDeliverablesTitle: 'process.detail.care.optimize.deliverables.title',
    phaseDeliverables: [
      'process.detail.discover.phase.deliverables.1',
      'process.detail.discover.phase.deliverables.2',
    ],
    ellipseSvg: Ellipse,
  },
  {
    detailsPhase: 'process.detail.phase3',
    imageSketch: ProcessPhase3,
    title: 'process.detail.ux.ui',
    description: 'process.detail.ux.ui.description',
    phaseDeliverablesTitle: 'process.detail.care.optimize.deliverables.title',
    phaseDeliverables: [
      'process.detail.ux.ui.phase.deliverables.1',
      'process.detail.ux.ui.phase.deliverables.2',
    ],
    ellipseSvg: Ellipse,
  },
  {
    detailsPhase: 'process.detail.phase4',
    imageSketch: ProcessPhase4,
    title: 'process.detail.implementation',
    description: 'process.detail.implementation.description',
    phaseDeliverablesTitle: 'process.detail.care.optimize.deliverables.title',
    phaseDeliverables: [
      'process.detail.implementation.phase.deliverables.1',
      'process.detail.implementation.phase.deliverables.2',
      'process.detail.implementation.phase.deliverables.3',
      'process.detail.implementation.phase.deliverables.4',
    ],
    ellipseSvg: Ellipse,
  },
  {
    detailsPhase: 'process.detail.phase5',
    imageSketch: ProcessPhase5,
    title: 'process.detail.deploy',
    description: 'process.detail.deploy.description',
    phaseDeliverablesTitle: 'process.detail.care.optimize.deliverables.title',
    phaseDeliverables: [
      'process.detail.deploy.phase.deliverables.1',
      'process.detail.deploy.phase.deliverables.2',
      'process.detail.deploy.phase.deliverables.3',
      'process.detail.deploy.phase.deliverables.4',
    ],
    ellipseSvg: Ellipse,
  },
  {
    detailsPhase: 'process.detail.phase6',
    imageSketch: ProcessPhase6,
    title: 'process.detail.care.optimize',
    description: 'process.detail.care.optimize.description',
    phaseDeliverablesTitle: 'process.detail.care.optimize.deliverables.title',
    phaseDeliverables: ['process.detail.care.optimize.phase.deliverables.1'],
    ellipseSvg: Ellipse,
  },
];
