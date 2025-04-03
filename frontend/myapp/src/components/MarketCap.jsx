import React from "react";


function MarketCap({symbol, price, change, changePercent, currency}){

    return (
        <div>
            <span>{symbol}</span>
            <div>
                <span>{price}</span>
                <span>{currency}</span>
            </div>
        </div>
        )
}

export default MarketCap;