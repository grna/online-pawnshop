export interface TypeProduct {
  title: string;
  quantity: number;
  price: number;
}

interface FromProducts {
  products: TypeProduct[];
}

export interface TypeState {
  fromProducts: FromProducts;
}

export interface TypeBuyingPageProps {
  products: TypeProduct[];
  fetchProducts: () => void;
}
