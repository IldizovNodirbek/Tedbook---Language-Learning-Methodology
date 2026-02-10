
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
