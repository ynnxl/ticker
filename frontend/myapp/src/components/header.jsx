import React from 'react'
import '../styles/PageStyle.css'

function header() {

    return (
        <main>
            <div className='header'>
                <a></a>
                <div>
                <ul>
                    <div className='header_box'>
                        <img className='header_img' src='/'></img>
                    </div>
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
                <div>
                    <img>
                    </img>
                </div>
            </div>
        </main>
        
    )
}

export default header

