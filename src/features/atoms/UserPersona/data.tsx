interface IUserData {
  image: string;
  name: string;
  shortInfo: string;
  location: string;
  bio: string;
  painPoints: string[];
  goals: string[];
}

export const userData: IUserData[] = [
  {
    image: '/images/nfcs/user_image.png',
    name: 'cases.nfcs.user.person.name',
    shortInfo: 'cases.nfcs.user.person.shortInfo',
    location: 'cases.nfcs.user.person.location',
    bio: 'cases.nfcs.user.person.bio.info',
    painPoints: [
      'cases.nfcs.user.person.painPoints1',
      'cases.nfcs.user.person.painPoints2',
      'cases.nfcs.user.person.painPoints3',
      'cases.nfcs.user.person.painPoints4',
    ],
    goals: [
      'cases.nfcs.user.person.goals1',
      'cases.nfcs.user.person.goals2',
      'cases.nfcs.user.person.goals3',
      'cases.nfcs.user.person.goals4',
      'cases.nfcs.user.person.goals5',
      'cases.nfcs.user.person.goals6',
      'cases.nfcs.user.person.goals7',
    ],
  },
];
