import './styles/PageStyle.css'
import Header from './components/header'
//import Footer from './components/footer'

function App() {

  return (
  <main>
    <div>
      <Header/>
    </div>
    <body>
      <div>
        <h1 className='page_title'>Welcome to Ticker</h1>
      </div>
      <div className='homepage_container'>
          <div className='marketcap_container'>

          </div>
          <div className='topgainer_container'>
          </div>
      </div>
    </body>
  </main>
  )
}

export default App
