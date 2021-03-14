"use strict";
const numberOfFilms =+ prompt('сколько фильмов вы уже просмотрели','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Cколько фильмов вы уже просмотрели',''), 
      b = prompt('Какая оценка фильма',''),
      c = prompt('Cколько фильмов вы уже просмотрели',''),
      d = prompt('Какая оценка фильма','');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[a] = d;

console.log(personalMovieDB);
