import React from "react";

function Details({details}){
    const detailsList = {
        name: "Name",
        country: "Country",
        currency: "Currency",
        exchange: "Exchange",
        ipo: "IPO Date",
        marketCapitilization: "Market Capitalization",
        finnhubIndustry: "Industry",
    }

    const convertMillionToBillion = () => {
        return (number/1000).toFixed(2);
    }
    return(
        <ul>
            {Object.keys(detailsList).map((item) => {
                return <li key={item}>
                    <span>{detailsList[item]}</span>
                    <span>{item === "marketCapitilization" ? `${convertMillionToBillion(detail[item])}B` : details[item]}</span>
                </li>
            })}
        </ul>
    )
}

export default Details;