
export interface Fruit {
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical';
  type: 'Natural' | 'Elemental' | 'Beast';
  price: string;
  tier: 'S+' | 'S' | 'A' | 'B' | 'C' | 'D';
  description: string;
}

export interface Sword {
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical';
  obtained: string;
  tier: 'S+' | 'S' | 'A' | 'B' | 'C' | 'D';
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  content?: string;
}

export enum AppView {
  Home = 'home',
  TierList = 'tierlist',
  Swords = 'swords',
  Guide = 'guide',
  Article = 'article'
}
