import DurationIconInvesTonus from '../../components/svgs/DurationIconInvesTonus';
import IndustryIconInvesTonus from '../../components/svgs/IndustryIconInvesTonus';
import TechnologiesIconInvesTonus from '../../components/svgs/TechnologiesIconInvesTonus';
import TimSizeIconInvesTonus from '../../components/svgs/TimSizeIconInvesTonus';
import { TINvesTonus } from './typesAtoms';

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
