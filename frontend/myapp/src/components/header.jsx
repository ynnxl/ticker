import React from 'react'
import Search from "./Search";
import {mockCompanyDetails} from "../constants/mock";
import '../styles/PageStyle.css'

function Header() {

    return (
            <div className='header'>
                <h1>{mockCompanyDetails.name}</h1>
                <Search />
            </div>
    )
}

export default Header;

