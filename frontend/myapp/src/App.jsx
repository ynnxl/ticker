import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/PageStyle.css";
import Header from "./components/Header";
import Search from "./components/Search";
import StockDetails from "./components/StockDetails";

function App() {
  const basePath = "https://finnhub.io/api/v1";
  const apiKey = "cvnirc1r01qq3c7fjhmgcvnirc1r01qq3c7fjhn0";

  const [stockData, setStockData] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const fetchWithErrorHandling = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      return await response.json();
    } catch (error) {
      console.error("Network error:", error);
      throw error;
    }
  };

  const fetchStockDetailsAndQuotes = async (symbols) => {
    try {
      const detailsPromises = symbols.map((symbol) =>
        fetchWithErrorHandling(`${basePath}/stock/profile2?symbol=${symbol}&token=${apiKey}`)
      );

      const quotesPromises = symbols.map((symbol) =>
        fetchWithErrorHandling(`${basePath}/quote?symbol=${symbol}&token=${apiKey}`)
      );

      const details = await Promise.all(detailsPromises);
      const quotes = await Promise.all(quotesPromises);

      const combinedData = symbols.map((symbol, index) => ({
        ticker: symbol,
        name: details[index]?.name || "N/A",
        price: quotes[index]?.c || "N/A",
        changePercent: quotes[index]?.dp || "N/A",
      }));

      setStockData(combinedData);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  useEffect(() => {
    const symbols = ["AAPL", "META", "TSLA", "GOOGL", "AMZN", "NVDA", "AMD"];
    fetchStockDetailsAndQuotes(symbols);
  }, []);

  
  const addToPortfolio = (stock) => {
    setPortfolio((prevPortfolio) => {
      if (prevPortfolio.some((item) => item.ticker === stock.ticker)) {
        return prevPortfolio;
      }
      return [...prevPortfolio, stock];
    });
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="page_title_container">
                  <h1 className="page_title">Welcome To Ticker</h1>
                </div>
                <div className="homepage_container">
                  <div className="marketcap_container">
                    <h3 className="marketcap_title">Market Cap</h3>
                    <div className="marketcap_list">
                      <ul>
                        <h3>Ticker</h3>
                        {stockData.map((stock) => (
                          <li key={stock.ticker}>
                            {stock.ticker}
                            <button
                              className="add_button"
                              onClick={() => addToPortfolio(stock)}
                            >
                              +
                            </button>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        <h3>Name</h3>
                        {stockData.map((stock) => (
                          <li key={stock.ticker}>{stock.name}</li>
                        ))}
                      </ul>
                      <ul>
                        <h3>Price</h3>
                        {stockData.map((stock) => (
                          <li key={stock.ticker}>${stock.price}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="topgainer_container">
                    <h3 className="topgainers_title">Top Gainers</h3>
                    <div className="topgainers_list">
                      <ul>
                        <h3>Ticker</h3>
                        {stockData.map((stock) => (
                          <li key={stock.ticker}>
                            {stock.ticker}
                            <button
                              className="add_button"
                              onClick={() => addToPortfolio(stock)}
                            >
                              +
                            </button>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        <h3>Name</h3>
                        {stockData.map((stock) => (
                          <li key={stock.ticker}>{stock.name}</li>
                        ))}
                      </ul>
                      <ul>
                        <h3>Change (%)</h3>
                        {stockData.map((stock) => (
                          <li key={stock.ticker}>{stock.changePercent}%</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="myportfolio_container">
                    <h3 className="myportfolio_title">My Portfolio</h3>
                    <ul>
                      {portfolio.map((stock) => (
                        <li key={stock.ticker}>
                          {stock.ticker} - {stock.name} - ${stock.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/stock/:symbol" element={<StockDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;