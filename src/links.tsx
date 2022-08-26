export interface ILink {
  name: string;
  url: string;
}
export interface ILinkImage {
  name: string;
  url: string;
  urlImg: string;
}
export const linksHeader: Array<ILink> = [
  { name: 'How it Works', url: 'howWorks' },
  { name: 'Play and earn', url: 'play' },
  { name: 'Roadmap', url: 'roadmap' },
  { name: 'Team', url: 'team' },
  { name: 'Partners&Investors', url: 'partners' },
  { name: 'Why invest in SpiderShiba', url: 'offer' },
  { name: 'Tokenomics', url: 'tokenomics' },
  { name: 'FAQ', url: 'faq' },
  { name: 'Community', url: 'community' },
];

export const linksConquer: Array<ILinkImage> = [
  { name: 'PinkSale', url: '#', urlImg: './images/conquer/pink-sale.png' },
  { name: 'InterFi', url: '#', urlImg: './images/conquer/inter-fi.png' },
  { name: 'Sandbox', url: '#', urlImg: './images/conquer/sandbox.png' },
  { name: 'Decentraland', url: '#', urlImg: './images/conquer/decentraland.png' },
  { name: 'CoinGecko', url: '#', urlImg: './images/conquer/coin-gecko.png' },
  { name: 'CoinMarketCap', url: '#', urlImg: './images/conquer/coin-market-cap.png' },
];

export const linksSoc: Array<ILinkImage> = [
  { name: 'telegram', url: '#', urlImg: './images/footer/telegram.svg' },
  { name: 'twitter', url: '#', urlImg: './images/footer/twitter.svg' },
  { name: 'roboto', url: '#', urlImg: './images/footer/roboto.svg' },
  { name: 'facebook', url: '#', urlImg: './images/footer/facebook.svg' },
  { name: 'm', url: '#', urlImg: './images/footer/m.svg' },
  { name: 'instagram', url: '#', urlImg: './images/footer/instagram.svg' },
];
