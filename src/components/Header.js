import React from 'react'
import '../css/HeaderFooter.css'

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
link.integrity = 'sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==';
link.crossOrigin = 'anonymous';
link.referrerPolicy = 'no-referrer';
document.head.appendChild(link);

/*Dropdown Menu*/
// const toggleBtn = document.querySelector('.toggle_btn')
// const toggleBtnIcon = document.querySelector('.toggle_btn i')
// const dropdownmenu = document.querySelector('.dropdown_menu')

// toggleBtn.onclick = function () {
//     dropdownmenu.classList.toggle('open')
//     const isOpen = dropdownmenu.classList.contains('open')

//     toggleBtnIcon.classList = isOpen
//         ? 'fa-solid fa-xmark'
//         : 'fa-solid fa-bars'
// }

export default function Header() {
    return (
        <header>
            {/* <div className='title'>
                <h2>My Netflix List</h2>
            </div>
            <ul className="nav">
                <li><a href="http://localhost:3001/home">Home</a></li>
                <li><a href="http://localhost:3001/about">About</a></li>
                <li><a href="http://localhost:3001/list">List</a></li>
                <li><a href="http://localhost:3001/profile">Profile</a></li>
                <li><a href="http://localhost:3001/support">Support</a></li>
                <li><a href="http://localhost:3001/contact">Contact</a></li>
            </ul>

            <div class="buttons">
                <a href="/rocnikovy/login"><button class="Login">Login</button></a>
                <a href="/rocnikovy/signup"><button class="SignUp">Sign Up</button></a>

                <div class="dropdown">
                    <a class="settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="https://freesvg.org/storage/img/thumb/gearRed.png" alt="" />
                    </a>

                    <div class="dropdown-menu dropdown-menu-right mt-10" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="/rocnikovy/settings">Data changing</a>
                    </div>
                </div>
            </div> */}

            <div className="navbar">
                <div className="logo"><a href="http://localhost:3001/home">My Netflix List</a></div>
                <ul className="links">
                    <li><a href="http://localhost:3001/about">About</a></li>
                    <li><a href="http://localhost:3001/list">List</a></li>
                    <li><a href="http://localhost:3001/profile">Profile</a></li>
                    <li><a href="http://localhost:3001/support">Support</a></li>
                    <li><a href="http://localhost:3001/contact">Contact</a></li>
                </ul>
                <a href="http://localhost:3001/login" className="action_btn">Login</a>
                <a href="http://localhost:3001/login" className="action_btn">Sign Up</a>
                <div className="toggle_btn">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>

            <div className="dropdown_menu">
                <li><a href="http://localhost:3001/about">About</a></li>
                <li><a href="http://localhost:3001/list">List</a></li>
                <li><a href="http://localhost:3001/profile">Profile</a></li>
                <li><a href="http://localhost:3001/support">Support</a></li>
                <li><a href="http://localhost:3001/contact">Contact</a></li>
                <a href="http://localhost:3001/login" className="action_btn">Login</a>
                <a href="http://localhost:3001/login" className="action_btn">Sign Up</a>
            </div>
        </header>
    )
}