import React, { useState } from "react";
import "../styles/PageStyle.css";
import { searchSymbols } from "../api/stock-api";
import SearchResults from "./SearchResults";
import { mockSearchResults } from "../constants/mock";

function Search() {
    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState(mockSearchResults.result);

    const clear = () => {
        setInput("");
        setBestMatches([]);
    };

    const updateBestMatches = async () => {
        try {
            if (input) {
                const searchResults = await searchSymbols(input);
                console.log("API Response:", searchResults);
                const result = searchResults.result;
                setBestMatches(result);
            } else {
                setBestMatches([]);
            }
        } catch (error) {
            setBestMatches([]);
            console.log("Error fetching search results:", error);
        }
    };

    return (
        <div className="searchbar_container">
            <input 
                type="text" 
                value={input}
                className="searchbar" 
                placeholder="Search stock..." 
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        updateBestMatches();
                    }
                }}
            />

            {input && (
                <button onClick={clear}>Clear</button>
            )}
            {input && (
                <button onClick={updateBestMatches}>Search</button>
            )}
            {input && bestMatches.length > 0 ? <SearchResults result={bestMatches} /> : null}
        </div>
    );
}

export default Search;