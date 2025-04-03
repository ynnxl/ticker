import React from "react";

const SearchResults = ({ result }) => {
    console.log("SearchResults prop:", result);
    return (
        <ul className="searchresult_ulist">
            {result.map((item) => {
                return (
                    <li className="searchresult_list"
                    key={item.symbol}>
                        <span>{item.symbol}</span>
                        <span>{item.description}</span>
                    </li>
                )
        })}
        </ul>
    )
    
}

export default SearchResults;