import React from "react";
import "./mainPageInfo.css";
class MainPageInfo extends React.Component {
  constructor(props) {
    super(props);
    this.buyRef = React.createRef();
    this.roadmapReft = React.createRef();
    this.teamRef = React.createRef();
  }

  render() {
    return (
      <div className="">
        <section className="text-white body-font">
          <div className="container px-5 py-24 mx-auto container1">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="italic sm:text-3xl text-2xl font-medium title-font mb-2 text-pink-500">
                  Sneaker Head Hype Club
                </h1>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-white">
                The future of sneakers is here.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-transparent-100 p-6 rounded-lg">
                  <img
                    className="w-80 rounded w-full object-cover object-center mb-6"
                    src="https://media.discordapp.net/attachments/980150909487173652/985953879147569152/1.png?width=660&height=660"
                    alt="content"
                  ></img>
                  <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                    "Captain"
                  </h3>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-transparent-100 p-6 rounded-lg">
                  <img
                    className="w-80 rounded w-full object-cover object-center mb-6"
                    src="https://media.discordapp.net/attachments/980150909487173652/985953881005649950/8.png?width=660&height=660"
                    alt="content"
                  ></img>
                  <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                    "Frat leader"
                  </h3>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-transparent-100 p-6 rounded-lg">
                  <img
                    className="w-80 rounded w-full object-cover object-center mb-6"
                    src="https://media.discordapp.net/attachments/980150909487173652/985953880288411748/5.png?width=660&height=660"
                    alt="content"
                  ></img>
                  <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                    "Alien"
                  </h3>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-transparent-100 p-6 rounded-lg">
                  <img
                    className="w-80 rounded w-full object-cover object-center mb-6"
                    src="https://media.discordapp.net/attachments/980150909487173652/985953879621533706/3.png?width=660&height=660"
                    alt="content"
                  ></img>
                  <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                    "Stoner"
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="buy" className="text-white body-font pb-20">
          <div className="container px-5 py-6 mx-auto flex flex-wrap container1">
            <h2 className="italic sm:text-3xl text-2xl text-pink-500 font-medium title-font mb-2 md:w-2/5">
              Buy a Sneaker Head
            </h2>
            <div className="md:w-3/5 md:pl-6">
              <p className="leading-relaxed text-base">
                Come on. Buy it. You know you want it.
              </p>
              <div className="flex md:mt-4 mt-6">
                <button className="inline-flex text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded">
                  Buy?
                </button>
              </div>
            </div>
          </div>
        </section>
        <h1 id="roadmap" className="text-center mx-auto text-2xl font-medium title-font text-pink-500 tracking-widest ">
          Roadmap
        </h1>
        <p className="text-center mx-auto lg:w-2/3  leading-relaxed text-base text-white pb-5">
          Our goals. With your help.
        </p>
        <div class="w-1/2 mx-auto">
          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-px h-full bg-gray-300"></div>
            </div>
            <div class="pb-8 ">
              <p class="mb-2 text-xl font-bold text-pink-500">Pre Launch</p>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-px h-full bg-gray-300"></div>
            </div>
            <div class="pb-8 ">
              <p class="mb-2 text-xl font-bold text-pink-500">0%</p>
              <p class="text-white">
                Once the member goal is met, we will host a pre-mint hype coin
                hunt for anyone to participate in.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-px h-full bg-gray-300"></div>
            </div>
            <div class="pb-8 ">
              <p class="mb-2 text-xl font-bold text-pink-500">25%</p>
              <p class="text-white">
                Release information about Sneaker Island to our members.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-px h-full bg-gray-300"></div>
            </div>
            <div class="pb-8 ">
              <p class="mb-2 text-xl font-bold text-pink-500">50%</p>
              <p class="text-white">
                Start our “Sneaker Release” Minting process. (More details
                coming soon…)
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-px h-full bg-gray-300"></div>
            </div>
            <div class="pb-8 ">
              <p class="mb-2 text-xl font-bold text-pink-500">Post Release</p>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-px h-full bg-gray-300"></div>
            </div>
            <div class="pb-8 ">
              <p class="mb-2 text-xl font-bold text-pink-500">75%</p>
              <p class="text-white">
                Host Hype Coin hunts in select cities for all of our token
                holders to participate in. Launch Merchandise
              </p>
            </div>
          </div>

          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="pt-1">
              <p class="mb-2 text-lg font-bold text-pink-500">100%</p>
              <p class="text-white pb-10">
                Open Sneaker Island to SHHC Members.
              </p>
            </div>
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div id="team" className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-pink-500 tracking-widest">
                OUR TEAM
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                This is the team.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://media.discordapp.net/attachments/980150909487173652/985953879147569152/1.png?width=660&height=660"
                  ></img>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-pink-500">
                      Holden Caulfield
                    </h2>
                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://media.discordapp.net/attachments/980150909487173652/985953879147569152/1.png?width=660&height=660"
                  ></img>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-pink-500">
                      Alper Kamu
                    </h2>
                    <h3 className="text-gray-500 mb-3">Designer</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://media.discordapp.net/attachments/980150909487173652/985953879147569152/1.png?width=660&height=660"
                  ></img>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-pink-500">
                      Atticus Finch
                    </h2>
                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://media.discordapp.net/attachments/980150909487173652/985953879147569152/1.png?width=660&height=660"
                  ></img>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-pink-500">
                      Henry Letham
                    </h2>
                    <h3 className="text-gray-500 mb-3">Designer</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default MainPageInfo;
