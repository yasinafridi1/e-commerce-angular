export interface NavItem {
  url?: string;
  text: string;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface CartItem extends ProductItem {
  quantity: number;
}
