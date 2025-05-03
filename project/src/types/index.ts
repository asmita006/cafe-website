export interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  popular?: boolean;
  rating?: number;
  reviews?: number;
}

export interface MenuSectionType {
  id: string;
  category: string;
  title: string;
  description: string;
  items: MenuItemType[];
}