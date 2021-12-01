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
  total: number;
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

export interface TypeCartContainerProps {
  cartItems: TypeProduct[];
  total: number;
  cartCheckOut: () => void;
  removeFromCart: (id: string) => void;
  fetchCartItems: () => void;
}

export interface TypeCartItemsListProps {
  cartItems: TypeProduct[];
  total: number;
  cartCheckOut: () => void;
  removeFromCart: (id: string) => void;
}

export interface SellingFormValues {
  title: string;
  quantity: number;
  desiredPrice: number;
}

export interface BuyingFormValues {
  quantity: string;
  offeredPrice: string;
}

export interface TypeSellingContainerProps {
  addProduct: (formValues: SellingFormValues) => void;
}

export interface TypeBuyingFormProps {
  product: TypeProduct;
  addToCart: (cartItem: TypeProduct) => void;
}
