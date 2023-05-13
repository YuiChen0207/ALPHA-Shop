import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./reset.scss";
import "./base.scss";
import { useState } from "react";

function App() {
  const [ step, setStep ] = useState(1)

  return (
    <div>
      <Header />
      <Main step={step} setStep={setStep} />
      <Footer />
    </div>
  );
}

export default App;
