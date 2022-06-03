import React from 'react';
import Navbar from '../navbar/navbar'
import './mainPage.css'
import MainPageInfo from './mainPageInfo/mainPageInfo';
class MainPage extends React.Component {
    render() {
      return (
        <div>
          <Navbar></Navbar>
          <img className="image1" src="https://media.discordapp.net/attachments/980150909487173652/980151789473107989/Retro_PSD.psd.png?width=2050&height=683" alt="nftImage"></img>
          <MainPageInfo></MainPageInfo>        
        </div>
      );
    }
  }

export default MainPage;