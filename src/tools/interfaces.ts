export interface TypeProduct {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}

interface FromProducts {
  products: TypeProduct[];
}

interface FromCart {
  cartItems: TypeProduct[];
}

export interface TypeState {
  fromProducts: FromProducts;
  fromCart: FromCart;
}

export interface TypeBuyingPageProps {
  products: TypeProduct[];
  fetchProducts: () => void;
  addToCart: (cartItem: TypeProduct) => void;
}
