import React from 'react';
import './gallery.css';
import NavAlt from '../navbarAlt/navbarAlt';
class Gallery extends React.Component {
    render() {
      return (
        <>
        <NavAlt></NavAlt>
        <div>  
            <h1 className="text-white">Gallery</h1> 
        </div>
        </>
      );
    }
  }

export default Gallery;