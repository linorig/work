"use strict";

/*
Создаём полное приложение со всеми функциями.
Создаём обьекты.
*/

const number0Films = prompt('Сколько фильмов вы уже просмотрели', '');

const personalMovieDB = {
    count: number0Films,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const a = prompt('Один из последних просмотреных фильмов?'),
b = prompt('На сколько его оцените?'),
c = prompt('Один из последних просмотреных фильмов?'),
d = prompt('На сколько его оцените?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);