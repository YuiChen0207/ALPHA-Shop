import { createContext, useState } from "react";
import cartData from "./data/cartData";

export const CartContext = createContext();
export const PaymentContext = createContext();

const initialState = {
  name: "John Doe",
  cardNumber: "1111 2222 3333 4444",
  expiration: "01/23",
  cvv: "123",
};

const PaymentContextProvider = ({ children }) => {
  const [paymentData, setPaymentData] = useState(initialState);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  return (
    <CartContext.Provider value={cartData}>
      <PaymentContext.Provider
        value={{
          paymentData,
          setPaymentData,
          orderConfirmed,
          setOrderConfirmed,
        }}
      >
        {children}
      </PaymentContext.Provider>
    </CartContext.Provider>
  );
};

export default PaymentContextProvider;
