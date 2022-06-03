import './App.css';
import React from 'react';
import FirstPage from './firstPage/firstPage'
import MainPage from './mainPage/mainPage'
import Provenance from './provenance/provenance';
import Gallery from './gallery/gallery';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './footer/footer';

function App() {
  return (
    <>
        <BrowserRouter /*basename={process.env.PUBLIC_URL}*/>
          <Routes>
            <Route path="/gallery" exact element = {<Gallery/>}></Route>
            <Route path="/provenance" exact element = {<Provenance/>}></Route>
            <Route path = "mainPage" exact element = {<MainPage/>}></Route>
            <Route path = "/"  exact element={<FirstPage/>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
    </>
  );
}

export default App;
