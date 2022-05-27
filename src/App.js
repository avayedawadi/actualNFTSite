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

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/gallery" exact element = {<Gallery/>}></Route>
            <Route path="/provenance" exact element = {<Provenance/>}></Route>
            <Route path = "mainPage" exact element = {<MainPage/>}></Route>
            <Route path = "/"  exact element={<FirstPage/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
