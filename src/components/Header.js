import React,{useState} from 'react'
import './styles/Header.css'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Header = ({selected}) => {
    const [showNav,setShowNav] = useState(false)
    const toggleNav = ()=>{
        setShowNav(!showNav)
    }
    return (
        <header>
            <div>
                <h2>NerdTheField</h2>
                <FaAlignRight className='header-icon' onClick={toggleNav} />
                <nav className='screen-nav'>
                    <Link to='/' className={selected ==='home' ? 'selected': ''}>Home</Link>
                    <Link to='/about' className={selected ==='about' ? 'selected': ''}>About</Link>
                    
                </nav>
            </div>
            <nav className={ showNav ? 'mobile-nav nav-shown' : 'mobile-nav' }>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                
            </nav>
        </header>
    )
}

export default Header
