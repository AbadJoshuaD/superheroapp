import 'font-awesome/css/font-awesome.min.css';
import React from 'react'
import '../searchbox/searchbox.styles.scss'

export const SearchBox = props => (
    <div className="search-box">
        <input className="search-bar" type="search" placeholder="Enter a Super Hero Name"/>
        <i className="fa fa-search icon-search"></i>
        <i className="fa fa-th-list icon-list"></i>
        <p className="speech-bubble">Checkout all Marvel Heroes!</p>
    </div>
)