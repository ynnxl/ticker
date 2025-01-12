import React from 'react'
import '../styles/PageStyle.css'

function header() {

    return (
        <main>
            <body className='header'>
                <a></a>
                <div>
                <ul>
                    <li>
                        <img src='/'></img>
                    </li>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>My Portfolio</a>
                    </li>
                </ul>
                </div>
                <form className='search'>
                    <label >
                        <input
                            className='searchBox'
                            type="text"
                        />
                    </label>
                </form>
            </body>
        </main>
        
    )
}

export default header

