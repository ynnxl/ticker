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
                <table>
                  <thead>
                    <tr>
                      <th>Ticker</th>
                        <tbody><MarketCap symbol={mockCompanyDetails.name}/></tbody>
                      <th>Price</th>
                       <tc><MarketCap price={mockStockQuote.c}/></tc>
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