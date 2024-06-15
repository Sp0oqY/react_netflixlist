import React from 'react'
import '../css/HeaderFooter.css'

export default function Header() {
    return (
        <header>
            <div className='title'>
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
            </div>


        </header>
    )
}