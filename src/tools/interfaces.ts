export interface TypeProduct {
  _id: string;
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
