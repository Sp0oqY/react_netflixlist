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
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropdownmenu = document.querySelector('.dropdown_menu');

    if (toggleBtn && toggleBtnIcon && dropdownmenu) {
        toggleBtn.onclick = function () {
            dropdownmenu.classList.toggle('open');
            const isOpen = dropdownmenu.classList.contains('open');

            toggleBtnIcon.className = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars';
        };
    } else {
        console.error('One or more elements are not found');
    }
});

export default function Header() {
    return (
        <header>
            <div className="navbar">
                <div className="logo"><a href="/home">My Netflix List</a></div>
                <ul className="links">
                    <li><a href="/about">About</a></li>
                    <li><a href="/list">List</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/support">Support</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

                <a href="/login" className="action_btn">Login</a>
                <a href="/login" className="action_btn">Sign Up</a>
                <div className="toggle_btn">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>

            <div className="dropdown_menu">
                <li><a href="/about">About</a></li>
                <li><a href="/list">List</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login" className="action_btn">Login</a></li>
                <li><a href="/login" className="action_btn">Sign Up</a></li>
            </div>
        </header>
    )
}