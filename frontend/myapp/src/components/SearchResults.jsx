import React from "react";

const SearchResults = ({ result }) => {
    console.log("SearchResults prop:", result);
    return (
        <ul className="searchresult_ulist">
            {result.map((item, index) => {
                return (
                    <button className="searchresult_list"
                    key={index}>
                        <span>{item.symbol}</span>
                        <span>{item.description}</span>
                    </button>
                )
        })}
        </ul>
    )
    
}

export default SearchResults;