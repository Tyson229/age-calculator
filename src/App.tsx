import "./styles/App.scss";
import Age from "./components/age/Age";
import Form from "./components/form/Form";
import { useState } from "react";
import { AgeContext } from "./context/context";
function App() {
  const [age, setAge] = useState({ day: "", month: "", year: "" });
  return (
    <main className="container">
      <AgeContext.Provider value={{ age, setAge }}>
        <Form />
        <Age />
      </AgeContext.Provider>
    </main>
  );
}

export default App;
