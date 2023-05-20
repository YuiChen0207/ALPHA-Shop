import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import PaymentContextProvider from "context/CartAndPaymentContext";
import "./reset.scss";
import "./base.scss";

function App() {
  return (
    <div>
      <Header />
      <PaymentContextProvider>
        <Main />
      </PaymentContextProvider>
      <Footer />
    </div>
  );
}

export default App;
