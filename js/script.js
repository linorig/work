"use strict";
const numberOfFilms =+ prompt('сколько фильмов вы уже просмотрели','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
for (let i = 0; i < 2; i++){
    const a = prompt('Cколько фильмов вы уже просмотрели',''), 
    b = prompt('Какая оценка фильма','');

    personalMovieDB.movies[a] = b;
 }
console.log(personalMovieDB);
