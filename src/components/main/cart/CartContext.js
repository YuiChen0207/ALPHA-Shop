import { createContext, useState } from "react";
import cartData from "./data/cartData";

export const CartContext = createContext();
export const PaymentContext = createContext();

const PaymentContextProvider = ({ children }) => {
  const initialState = {
    price: 0,
    name: "John Doe",
    cardNumber: "1111 2222 3333 4444",
    expiration: "01/23",
    cvv: "123",
  };

  const [paymentData, setPaymentData] = useState(initialState);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const updatePaymentData = (data) => {
    setPaymentData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };
  return (
    <CartContext.Provider value={cartData}>
      <PaymentContext.Provider
        value={{
          paymentData,
          setPaymentData,
          updatePaymentData,
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
