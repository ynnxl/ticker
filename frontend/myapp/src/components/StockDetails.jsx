import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StockDetails = () => {
    const { symbol } = useParams();
    const [stockDetails, setStockDetails] = useState(null);
    const [historicalData, setHistoricalData] = useState(null);

    
    useEffect(() => {
        const fetchStockDetails = async () => {
            try {
                const response = await fetch(
                    `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=cvnirc1r01qq3c7fjhmgcvnirc1r01qq3c7fjhn0`
                );
                const data = await response.json();
                setStockDetails(data);
            } catch (error) {
                console.error("Error fetching stock details:", error);
            }
        };

        fetchStockDetails();
    }, [symbol]);

    
    useEffect(() => {
        const fetchHistoricalData = async () => {
            try {
                const response = await fetch(
                    `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&from=${Math.floor(
                        Date.now() / 1000 - 60 * 60 * 24 * 30
                    )}&to=${Math.floor(Date.now() / 1000)}&token=cvnirc1r01qq3c7fjhmgcvnirc1r01qq3c7fjhn0`
                );
                const data = await response.json();
                if (data.s === "ok") {
                    setHistoricalData(data);
                }
            } catch (error) {
                console.error("Error fetching historical data:", error);
            }
        };

        fetchHistoricalData();
    }, [symbol]);

    if (!stockDetails) {
        return <p>Loading stock details...</p>;
    }

    
    const chartData = historicalData
        ? {
              labels: historicalData.t.map((timestamp) =>
                  new Date(timestamp * 1000).toLocaleDateString()
              ),
              datasets: [
                  {
                      label: `${symbol} Stock Price`,
                      data: historicalData.c, 
                      borderColor: "rgba(75, 192, 192, 1)",
                      backgroundColor: "rgba(75, 192, 192, 0.2)",
                      tension: 0.4,
                  },
              ],
          }
        : null;

    return (
        <div className="stockdetails_container">
            <div className="stockdetails_chart">
                <h1>Stock Price Chart</h1>
                {chartData ? (
                    <Line data={chartData} />
                ) : (
                    <p>Loading chart...</p>
                )}
            </div>
            <div className="stockdetails_details">
                <h1>{stockDetails.name}</h1>
                <p>Symbol: {stockDetails.ticker}</p>
                <p>Market Cap: {stockDetails.marketCapitalization}</p>
                <p>Exchange: {stockDetails.exchange}</p>
                <p>Industry: {stockDetails.finnhubIndustry}</p>
                <p>
                    Website:{" "}
                    <a
                        className="website_link"
                        href={stockDetails.weburl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {stockDetails.name}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default StockDetails;