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
  let filmdata = getMoviesFromDirector(array, director);
  // console.log (filmdata);
  let scoredata = filmdata.map(e => e.score);
  // console.log(scoredata);
  let resultScore = scoredata.reduce((a,b) => (a + b));
  let calcScore = Number((resultScore / filmdata.length).toFixed(2));
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
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



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
