const basePath = 'https://finnhub.io/api/v1';
const apiKey = 'cvlh98hr01qj3umdd18gcvlh98hr01qj3umdd190';

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

export const searchSymbols = async (query) => {
    const url = `${basePath}/search?q=${query}&token=${apiKey}`;
    return await fetchWithErrorHandling(url);
};

export const fetchStockDetails = async (stockSymbol) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${apiKey}`;
    return await fetchWithErrorHandling(url);
};

export const fetchQuote = async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${apiKey}`;
    return await fetchWithErrorHandling(url);
};
