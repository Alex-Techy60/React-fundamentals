import { useState } from "react";
import './App.css';
import Card from "./components/Card";

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black p-6 rounded-xl">
        Test Tailwind
      </h1>
      <Card userName="Alex" />
      <Card userName="Emma" content="Loves to tease Alex, but also very caring and protective to him" />
    </>
  );
}

export default App;