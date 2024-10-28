import React from 'react'
import '../css/About.css';
export default function Home() {
    return (
        <div class="main">
            <h1>About</h1>
            <h3>This site is based for all Netflix fans. <br /> Everyone who visits the site and creates a profile can: </h3>
            <div class="content">
                <ul>
                    <li>Make a list of movies</li>
                    <li>Add your favorite movie to the list</li>
                    <li>Add statistics to the movie: whether he is watching it, whether he has already watched it,
                        whether he has watched it but not enjoyed it, or whether he plans to watch it.</li>
                    <li> Comment every single movie</li>
                </ul>
                <img src="https://icon-library.com/images/white-icon/white-icon-13.jpg" alt="" />
            </div>
        </div>
    );
}