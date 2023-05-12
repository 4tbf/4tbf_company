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
    name: 'Charles Viani',
    shortInfo: '36 , Painter (Collector), Co-Founder',
    location: 'France',
    bio: 'Charles has his own coffee shop and he likes painting. He has a big career plans for his future as a artwork collector. He wants to make some investments, to buy some NFT artworks and crypto tokens, but he doesn’t have time to study the markets.',
    painPoints: [
      'Doesn’t know where to make investments',
      'Long registration',
      'Lack of analytics',
      'High prices for analytical services',
    ],
    goals: [
      'Earn money',
      'Easy registration',
      'Intuitive interface',
      'More info about the products he is interested in',
      'Analytical info for a long time period',
      'More and easy features',
      'Affordable pricing, discounts and rewards programs',
    ],
  },
];
