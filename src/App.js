import React from "react";
import Navigate from '../src/config/Navigate';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Navigate/>
      <Footer/>
    </div>
  );
}

export default App;
