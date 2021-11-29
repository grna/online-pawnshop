import React, { useState } from "react";
import { formatPrice } from "../tools/helperFunctions";
import { TypeProduct } from "../tools/interfaces";
import Product from "./Product";
import { ButtonLarge, ProductListWrapper } from "./styledComponents";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartItemsList = (props: {
  cartItems: TypeProduct[];
  cartCheckOut: () => void;
  removeFromCart: (id: string) => void;
}) => {
  const navigate = useNavigate();
  const { cartItems, cartCheckOut, removeFromCart } = props;
  const [total, setTotal] = useState(
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
  );

  const onCheckOut = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Your order has been placed.");
    cartCheckOut();
    navigate("/buy");
  };

  const onRemoveClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    toast.success("Item removed.");
    removeFromCart(id);
  };

  return (
    <>
      <ProductListWrapper>
        {cartItems.map((item) => (
          <Product key={item._id} product={item}>
            <ButtonLarge onClick={(e) => onRemoveClick(e, item._id)}>
              Remove
            </ButtonLarge>
          </Product>
        ))}
      </ProductListWrapper>
      <div>{`Total: ${formatPrice(total)}`}</div>
      <ButtonLarge onClick={(e) => onCheckOut(e)}>Checkout</ButtonLarge>
    </>
  );
};

export default CartItemsList;