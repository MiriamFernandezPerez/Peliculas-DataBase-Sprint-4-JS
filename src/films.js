// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(e => e.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}
// getAllDirectors(movies); => Comprobación 

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(e => e.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = getMoviesFromDirector(array, director);
  let scoreData = moviesAverage(movies);
  return scoreData;
}

//Creo la función moviesAverage
function moviesAverage(movies){
  let scoresData = movies.map(e => e.score).filter(score => score !== ''); 
  let resultScore = scoresData.reduce((a,b) => (a + b));
  let calcScore = Number((resultScore / scoresData.length).toFixed(2));
  console.log("EXERCICE 3 ->", calcScore);
  return calcScore;
}
// moviesAverageOfDirector(movies, 'Francis Ford Coppola'); // => Comprobación

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titleData = array.map(e => e.title);
  let orderedTitle = titleData.sort();
  let only20 = orderedTitle.slice(0, 20);
  console.log("EXERCICE 4 ->", only20);
  return only20;
}
// orderAlphabetically(movies); // => Comprobación

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let myArray = array.map(e => ({...e}));
  
  myArray.sort( (a,b) =>{
    if (a.year < b.year){
      return -1;
    }
    if (a.year > b.year){
      return 1;
    }
    if (a.title.toLowerCase() < b.title.toLowerCase()){
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()){
      return 1;
    }
    return 0;
  })
    
  console.log("EXERCISE 5 ->", myArray);
  return myArray; 
}
// orderByYear(movies); // => Comprobación

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let movies = array.filter(e => e.genre.includes(genre));
  let result = moviesAverage(movies);
  console.log("EXERCICE 6 ->", result);
  return result;
}
// moviesAverageByCategory(movies, 'Crime'); // => Comprobacion

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map ( e =>{
    let separate = e.duration.split(" ");

    let hour;
    if (separate[0] === undefined){
      hour = 0;
    }else{
      hour = separate[0].split("h");
    }
    
    let minute;
    if (separate[1] === undefined){
      minute = 0;
    }else{
      minute = separate[1].split("min");
    }
    
    let totalMinutes = parseInt(hour) * 60 + parseInt (minute);
    return {...e, duration: totalMinutes};
  });
  console.log("EXERCICE 7 ->", result);
  return result;
}
// hoursToMinutes(movies); // => Comprobacion

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filmsOfYear = array.filter( e => e.year === year);
  let scoresOfFilms = filmsOfYear.map (e => e.score);
  let scoresOrdered = scoresOfFilms.sort((a,b) => a>b);
  let result = filmsOfYear.filter( e => e.score === scoresOrdered[0]);
  console.log("EXERCICE 8 ->", result);
  return result;
}
// bestFilmOfYear(movies, 1992 ); //Comprobacion



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

