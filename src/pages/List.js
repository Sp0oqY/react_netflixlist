import React from 'react';
import '../css/List.css';
export default function List() {
    return (
        <div>
            <section class="filter">
                <a href="/rocnikovy/list?category=s">Series</a>
                <a href="/rocnikovy/list?category=m">Movies</a>
                <form action="/rocnikovy/list" method="get" class="search-box">
                    <button class="btn-search"><i class="fas fa-search"></i></button>
                    <input type="search" class="input-search" name="search" placeholder="Type to Search..." />
                </form>

                <form action="/rocnikovy/list">
                    <select name="genre" id="genre" onchange="this.form.submit()">
                        <option default selected disabled>Genres</option>
                    </select>
                </form>

                <a href="/rocnikovy/list?all">All</a>

            </section>

            <div class="movies">
                <div class="movie" data-movie="<?= $movie['id'] ?>" method="POST">
                    <img class="movie-img" src="" alt="" />
                    <h3 class="movie-title">v h</h3>
                </div>
            </div>
        </div >
    );
}