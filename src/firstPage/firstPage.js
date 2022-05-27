import React from 'react';
import {
    Link
  } from "react-router-dom";
class FirstPage extends React.Component {
    render() {
        return (
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="https://cdn.vox-cdn.com/thumbor/qi6L2dYC2T_879sjDmdfrfvhAiQ=/0x0:3000x3000/1200x800/filters:focal(1260x1260:1740x1740)/cdn.vox-cdn.com/uploads/chorus_image/image/68948366/2021_NYR_20447_0001_001_beeple_everydays_the_first_5000_days034733_.0.jpg"></img>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-skyblue-900 text-lg">Welcome to the NFT site</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">Logo here?</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet hendrerit nisl non vehicula. Nam cursus aliquet tristique. Nullam euismod suscipit lacus, in eleifend tellus luctus vel. </p>
          <Link to="/mainPage">
            <a class="text-indigo-500 inline-flex items-center" href="#ye">Go onwards
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
        );
    }
}



export default FirstPage;