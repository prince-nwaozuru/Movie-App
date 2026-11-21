# Movie App

A React single-page app for discovering movies. It shows what's trending today, lets you search the full TMDB catalogue, opens a details page for any film, and keeps a personal favourites list.

## Features

- **Trending:** today's trending movies on the home page
- **Search:** search movies by title through the TMDB API
- **Movie details:** a dedicated page for each film, with client-side routing
- **Favourites:** save and remove movies, stored in the browser's `localStorage`

## Tech stack

React 19 · React Router 7 · Vite · TMDB REST API · ESLint

## Getting started

```bash
git clone https://github.com/khalibsDoom/Movie-App.git
cd Movie-App
npm install
cp .env.example .env      # then add your own TMDB API key
npm run dev
```

You can get a free API key at [themoviedb.org](https://www.themoviedb.org/settings/api). The key is read from `VITE_API_KEY` and is never committed (`.env` is git-ignored).

## Project structure

```
src/
├── App.jsx           # routes
├── Home.jsx          # trending + search
├── MovieDetails.jsx  # single movie page
└── Favorites.jsx     # saved movies (localStorage)
```
