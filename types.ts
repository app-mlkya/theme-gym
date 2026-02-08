
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'pastry' | 'bread' | 'cake' | 'savory';
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}
