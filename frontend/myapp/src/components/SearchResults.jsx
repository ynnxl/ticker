import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ result }) => {
    const navigate = useNavigate();

    const handleStockClick = (symbol) => {
        navigate(`/stock/${symbol}`);
    };

    return (
        <ul className="searchresult_ulist">
            {result.map((item, index) => (
                <button
                    className="searchresult_list"
                    key={index}
                    onClick={() => handleStockClick(item.symbol)}
                >
                    <span>{item.symbol}</span>
                    <span>{item.description}</span>
                </button>
            ))}
        </ul>
    );
};

export default SearchResults;