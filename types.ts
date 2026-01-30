export type Page = 'home' | 'food' | 'rooms' | 'whyus' | 'location' | 'contact' | 'bookings' | 'menu' | 'paultons' | 'newforest' | 'salisbury' | 'privacy' | 'terms' | 'accessibility';

export interface NavItem {
  label: string;
  value: Page;
}

export interface Review {
  author: string;
  content: string;
  location: string;
  rating: number;
}

export interface FeatureProps {
  title: string;
  description: string;
  image: string;
  align?: 'left' | 'right';
  ctaText?: string;
  ctaAction?: () => void;
}

export interface RoomType {
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
}