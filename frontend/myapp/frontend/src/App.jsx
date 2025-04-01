import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './styles/PageStyle.css'
import Header from './components/header'
//import Footer from './components/footer'
function App() {

  // const [backendData, setBackendData] = useState([{}])
  
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return (
  <main>
    <div>
      <Header/>
    </div>
    <body>
      <div className='page_title_container'>
        <h1 className='page_title'>Welcome to Ticker</h1>
      </div>
      <div className='homepage_container'>
          <div className='marketcap_container'>
            <h3>Market Cap</h3>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <Symbol ticker='AAPL'/>
                  <Symbol ticker='AAPL'/>
                  <Symbol ticker='AAPL'/>
                </tbody>
              </table>
            </div>
          </div>
          <div className='topgainer_container'>
            <h3>Top Gainers</h3>
          </div>
          <div className='myportfolio_container'>
            <h3>My Portfolio

            </h3>

          </div>
      </div>
    </body>
  </main>
  )
}

export default App