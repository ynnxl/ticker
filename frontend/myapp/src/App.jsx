import React, { useState } from "react";
import "./styles/PageStyle.css";
//import Header from './components/header';
import Search from "./components/Search";

function App() {

  return (
    <div>
      <div>
        <Search/>
      </div>
      <body>
        <div className='page_title_container'>
          <h1 className='page_title'>Welcome to Ticker</h1>
        </div>
        <div className='homepage_container'>
            <div className='marketcap_container'>
              <h3>Market Cap</h3>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Ticker</th>
                      <th>Price</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className='topgainer_container'>
              <h3>Top Gainers</h3>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Ticker</th>
                      <th>Price</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className='myportfolio_container'>
              <h3>My Portfolio</h3>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Ticker</th>
                      <th>Price</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
        </div>
      </body>
    </div>
  )
}

export default App;