import React, { useState, useEffect } from "react";
import "../styles/PageStyle.css";
import SearchResults from "./SearchResults";

function Search() {
    const basePath = 'https://finnhub.io/api/v1';
    const apiKey = 'cvnirc1r01qq3c7fjhmgcvnirc1r01qq3c7fjhn0';

    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

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

    const searchSymbols = async (query) => {
        const url = `${basePath}/search?q=${query}&exchange=US&token=${apiKey}`;
        return await fetchWithErrorHandling(url);
    };

    const clear = () => {
        setInput("");
        setBestMatches([]);
        setFilteredResults([]);
    };

    const updateBestMatches = async () => {
        try {
            if (input) {
                const searchResults = await searchSymbols(input);
                console.log("API Response:", searchResults);
                const result = searchResults.result || [];
                setBestMatches(result);
            } else {
                setBestMatches([]);
            }
        } catch (error) {
            setBestMatches([]);
            console.log("Error fetching search results:", error);
        }
    };

    // Debounce the API call
    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            if (input) {
                updateBestMatches();
            } else {
                setBestMatches([]);
            }
        }, 100); // 300ms debounce delay

        return () => clearTimeout(debounceTimeout);
    }, [input]);

    // Filter results locally based on input
    useEffect(() => {
        if (input && bestMatches.length > 0) {
            const filtered = bestMatches.filter((item) =>
                item.description.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredResults(filtered);
        } else {
            setFilteredResults(bestMatches);
        }
    }, [input, bestMatches]);

    return (
        <div className="searchbar_container">
            <input
                type="text"
                value={input}
                className="searchbar"
                placeholder="Search stock..."
                onChange={(event) => setInput(event.target.value)}
            />

            {input && (
                <button className="clear"onClick={clear}>Clear</button>
            )}

            {filteredResults.length > 0 ? (
                <SearchResults result={filteredResults} />
            ) : (
                input && <p>No results found.</p>
            )}
        </div>
    );
}

export default Search;