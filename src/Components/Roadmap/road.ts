export interface IRoad {
  id: number;
  data: string;
  actions: string[];
  isFuture: boolean;
}
export const roads: Array<IRoad> = [
  {
    id: 0,
    data: 'August 2021',
    actions: ['Started project', 'Budget accumulation', 'Winning team search'],
    isFuture: false,
  },
  {
    id: 1,
    data: 'Sept - Nov 2021',
    actions: [
      'Whitepaper creation',
      'Smartcontract testing',
      'Building ideas for nft game',
      'start developing website and game',
      'start creating NFT',
      'start creating tokenomics',
    ],
    isFuture: false,
  },
  {
    id: 2,
    data: 'Dec - Jan 2022',
    actions: [
      'Official launch on pinksale',
      'Start marketing campaign',
      'Airdrop',
      'Panckacke swap launch',
      'Start of collaborations with decentraland and the sandbox',
    ],
    isFuture: false,
  },
  {
    id: 3,
    data: 'Q1 2022',
    actions: [
      'Listing on coinmarketcap and coingecko',
      'Early beta game',
      'Promotion cooperation with big celebrities',
      'NFT & Game community build-up',
      'NFT collaborations and launch',
    ],
    isFuture: true,
  },
  {
    id: 4,
    data: 'Q2 2022',
    actions: [
      'Launch of new website',
      'Centralized exchange listening',
      'Launch of Spidershiba inu single player',
      'Creation of NFT marketplace',
      'First teaser of Spidershiba inu World Metaverse multiplayer',
      'Android & iOS App release',
    ],
    isFuture: true,
  },
];
