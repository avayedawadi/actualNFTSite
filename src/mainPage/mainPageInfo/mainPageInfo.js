import React from 'react';
import './mainPageInfo.css'
class MainPageInfo extends React.Component {

    constructor(props) {
        super(props)
        this.buyRef = React.createRef()  
        this.roadmapReft = React.createRef()
        this.teamRef = React.createRef()
    }

    render() {
        return (
            <div>
                <section className="text-sky-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-sky-900">Welcome to this stuff</h1>
                            <p className="leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu felis vitae sem hendrerit porttitor eu id ipsum. Quisque est urna, sagittis eu lobortis ac, rutrum venenatis lacus. Proin sed lobortis ante, a ultrices nunc. Aliquam velit risus, sagittis vel ligula non, mattis porttitor tellus. Ut eu massa id arcu interdum facilisis in nec nibh. Vestibulum hendrerit, ipsum quis ullamcorper finibus, arcu ante efficitur nisi, a sagittis libero urna vitae metus. Nulla sagittis condimentum auctor. </p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <img src="https://ik.imagekit.io/bayc/assets/ape4.png" alt="Random NFT"></img>
                        </div>
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0" ref={this.buyRef}>
                            <h1 className="title-font font-medium text-3xl text-sky-900">Buy NFT</h1>
                            <p className="leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu felis vitae sem hendrerit porttitor eu id ipsum. Quisque est urna, sagittis eu lobortis ac, rutrum venenatis lacus. Proin sed lobortis ante, a ultrices nunc. Aliquam velit risus, sagittis vel ligula non, mattis porttitor tellus. Ut eu massa id arcu interdum facilisis in nec nibh. Vestibulum hendrerit, ipsum quis ullamcorper finibus, arcu ante efficitur nisi, a sagittis libero urna vitae metus. Nulla sagittis condimentum auctor. </p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <img src="https://ik.imagekit.io/bayc/assets/ape4.png" alt="Random NFT"></img>
                        </div>
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0" ref={this.roadmapRef}>
                            <h1 className="title-font font-medium text-3xl text-sky-900">Roadmap</h1>
                            <p className="leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu felis vitae sem hendrerit porttitor eu id ipsum. Quisque est urna, sagittis eu lobortis ac, rutrum venenatis lacus. Proin sed lobortis ante, a ultrices nunc. Aliquam velit risus, sagittis vel ligula non, mattis porttitor tellus. Ut eu massa id arcu interdum facilisis in nec nibh. Vestibulum hendrerit, ipsum quis ullamcorper finibus, arcu ante efficitur nisi, a sagittis libero urna vitae metus. Nulla sagittis condimentum auctor. </p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <img src="https://ik.imagekit.io/bayc/assets/ape4.png" alt="Random NFT"></img>
                        </div>
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0" ref={this.teamRef}>
                            <h1 className="title-font font-medium text-3xl text-sky-900">Team</h1>
                            <p className="leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu felis vitae sem hendrerit porttitor eu id ipsum. Quisque est urna, sagittis eu lobortis ac, rutrum venenatis lacus. Proin sed lobortis ante, a ultrices nunc. Aliquam velit risus, sagittis vel ligula non, mattis porttitor tellus. Ut eu massa id arcu interdum facilisis in nec nibh. Vestibulum hendrerit, ipsum quis ullamcorper finibus, arcu ante efficitur nisi, a sagittis libero urna vitae metus. Nulla sagittis condimentum auctor. </p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <img src="https://ik.imagekit.io/bayc/assets/ape4.png" alt="Random NFT"></img>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default MainPageInfo;