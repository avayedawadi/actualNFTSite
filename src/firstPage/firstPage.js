import React from 'react';
import {
  Link
} from "react-router-dom";
import './firstPage.css'

class FirstPage extends React.Component {
  render() {
    return (
      <>
        <main className="flex h-screen flex-wrap p-10 lg:px-32 bg-black-900 text-white">
          <section className="m-auto mainSection md:w-9/12 xl:w-8/12">
            <span className="font-bold uppercase tracking-widest">Announcing</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-[#c874b2]">
              SNEAKER HEAD<br/>HYPE CLUB
            </h1>
            <p className="font-bold mb-1">The NFT for the future</p>
            <p>Club of sneaker-heads working to help YOU grow in the NFT space</p>
            <br/>
            <Link to="/mainPage">
              <button type="submit" className="button">⠀⠀⠀ENTER⠀⠀⠀</button>
            </Link>
          </section>
          <img className="m-auto landingGif" alt="content" src="https://media.discordapp.net/attachments/980150909487173652/980151168338628608/IMG_4033.gif"></img>
        </main>
      </>
    );
  }
}



export default FirstPage;