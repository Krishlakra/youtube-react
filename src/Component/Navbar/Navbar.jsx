import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'
import menu from '../../assets/menu.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'
const Navbar = ({ setSidebar }) => {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu' onClick={() => setSidebar(prev => prev === false ? true : false)} src={menu} alt='menu' />
                <Link to='/'><img className='logo' src={logo} alt="logo" /></Link>

            </div>
            <div className='nav-middle flex-div'>
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' />
                    <img className='search' src={search} alt='search' />
                </div>

            </div>
            <div className='nav-right flex-div'>
                <img className='upload' src={upload} alt='upload' />
                <img className='Notification' src={bell} alt="Notification" />
                <img src={profile} className='profile' alt='profile' />
                {/* <img src="" alt="" /> */}

            </div>
        </nav>
    )
}

export default Navbar