import IndustryIcon from '../../../components/svgs/IndustryIcon';
import DurationIcon from '../../../components/svgs/DurationIcon';
import TeamSizeIcon from '../../../components/svgs/TeamSizeIcon';
import TechnologiesIcon from '../../../components/svgs/TechnologiesIcon';

interface IData {
  title: string;
  description: string;
  icon: any;
}
export const getNfcsCardsData = (t) => {
  const scope = 'cases.nfcs.card';
  const data: IData[] = [
    {
      title: t(`${scope}.first.title`),
      description: t(`${scope}.first.description`),
      icon: <IndustryIcon />,
    },
    {
      title: t(`${scope}.second.title`),
      description: t(`${scope}.second.description`),
      icon: <DurationIcon />,
    },
    {
      title: t(`${scope}.third.title`),
      description: t(`${scope}.third.description`),
      icon: <TeamSizeIcon />,
    },
    {
      title: t(`${scope}.fourth.title`),
      description: t(`${scope}.fourth.description`),
      icon: <TechnologiesIcon />,
    },
  ];
  return data;
};
