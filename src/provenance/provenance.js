import React from 'react';
import './provenance.css'
import Navbar from '../navbar/navbar';
class Provenance extends React.Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <div>
          <h1 className="text-white text-4xl text-center">Provenance Record</h1>
          <table>
            <tbody>
            <tr>
            <th>Initial Sequence Index</th>
              <th>Assigned Token Id</th>
              <th>SHA-256 Hash</th>
              <th>IPFS Hash</th>
            </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Provenance;