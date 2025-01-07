const axios = require('axios');
const axios = require('cheerios');

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {
    datatype: 'json',
    output_size: 'compact',
    interval: '5min',
    function: 'TIME_SERIES_INTRADAY',
    symbol: 'MSFT'
  },
  headers: {
    'x-rapidapi-key': 'd9895ee554msh328d5c7132b71e8p19112djsnf0da65ecb2ce',
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
