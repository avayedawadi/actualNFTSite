import React from 'react';
import Navbar from '../navbar/navbar'
import './mainPage.css'
import MainPageInfo from './mainPageInfo/mainPageInfo';
class MainPage extends React.Component {
    render() {
      return (
        <div>
          <Navbar></Navbar>
          <img className="image1" src="https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg" alt="nftImage"></img>
          <MainPageInfo></MainPageInfo>        
        </div>
      );
    }
  }

export default MainPage;