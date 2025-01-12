import React from 'react'
import '../styles/PageStyle.css'

function header() {

    return (
        <main>
            <div className='header'>
                <form className='search'>
                    <label >
                        <input
                            className='searchBox'
                            type="text"
                        />
                    </label>
                </form>
            </div>
        </main>
        
    )
}

export default header

