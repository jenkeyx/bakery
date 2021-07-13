import React from 'react'
import '../styles/Header.scss'
import searchBg from '../res/ui/search_bg.svg'
import searchIcon from '../res/ui/search_icon.svg'
import profileIcon from '../res/ui/profile_icon.svg'

export default function Header() {
    return (
        <div className="header">
            <div className="search">
                <img className="search-icon" src={searchIcon} alt="search icon"/>
                <img className="search-bg" src={searchBg} alt="search field"/>
                <input className="search-input" type="text" placeholder="Search"/>
            </div>
            <img className="profile-icon" src={profileIcon} alt="profile icon"/>
        </div>
    )
}
