import React, { useState } from "react";
import "./styles/PageStyle.css";
import Header from "./components/Header";
import Details from "./components/Details";
import { fetchStockDetails } from "./api/stock-api";
import StockContext from "./context/StockContext";
import MarketCap from "./components/MarketCap";
import { mockCompanyDetails, mockStockQuote } from "./constants/mock";

function App() {

  const [stockSymbol, setStockSymbol] = useState("FB");

  return (
    <div>
      <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
      <div>
        <Header/>
      </div>
      <div>
        <div className='page_title_container'>
          <h1 className='page_title'>Welcome to Ticker</h1>
        </div>
        <div className='homepage_container'>
            <div className='marketcap_container'>
              <h3>Market Cap</h3>
              <div>
                <ul>
                  <h3>Ticker</h3>
                  <li><MarketCap symbol={mockCompanyDetails.name}/></li>
                  <li> Google</li>
                  <li>Facebook</li>
                  <li>Tesla</li>
                </ul>
                <ul>
                  <h3>Price</h3>
                  <li><MarketCap price={mockStockQuote.c}/></li>
                  <li>450.94</li>
                  <li>687.92</li>
                  <li>280</li>
                </ul>
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
                <MarketCap symbol={mockCompanyDetails.ticker} price={300} change={30} currency={"USD"}/>
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
      </div>
      </StockContext.Provider>
    </div>
  )
}

export default App;