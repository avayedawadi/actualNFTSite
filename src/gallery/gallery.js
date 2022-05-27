import React from 'react';
import './gallery.css';
import Navbar from '../navbar/navbar';
class Gallery extends React.Component {
    render() {
      return (
        <>
        <Navbar></Navbar>
        <div>  
            <h1 className="text-white">Gallery</h1> 
        </div>
        </>
      );
    }
  }

export default Gallery;