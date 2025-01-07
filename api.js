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
    'x-rapidapi-key': 'Sign Up for Key',
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
