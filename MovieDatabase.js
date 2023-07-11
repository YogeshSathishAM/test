async function searchMovies(moviename){
    let Url = "http://www.omdbapi.com/?t=avenger";
    Url = "http://www.omdbapi.com/?t="+moviename+"&apikey=3068ccba";
    let data = await fetch(Url)
    data = await data.json();
    console.log(data);
    let title = data.Title
    let ReleasedDate = data.Released 
    let poster = data.Poster
    let Director = data.Director
    let rating = data.imdbRating
    let genre = data.Genre;


console.log("Title: " +title+"\nRelease Date: "+ReleasedDate+"\nposter: "+poster+"\ndirector: "+Director+"\nrating: "+rating+"\ngenre: "+genre)

}
searchMovies("avenger");

function trim(string){  // function to trim the first 3 letters from imdb rating so as to get a number
    let string1 = "";
    string1 = string;
   string1 = string1.slice(3,9);
    return string1
}

async function getMovieDetails(){
    //plot, summary, cast, director, ratings, genre, and runtime.
    //let Url = "http://www.omdbapi.com/?s=avenger"+"&apikey=3068ccba";
    let Url = "http://www.omdbapi.com/?s=2006"+"&apikey=3068ccba"
    let data = await fetch(Url)
    data = await data.json();
    console.log(data)
    return data;
}
//getMovieDetails(); no need to call function here as the function is already called in the next function

async function getTopRatedMovies(){
let data = await getMovieDetails()
console.log(data);
console.log(data.Search);
let ratingArray = [];

//******************extracting imdb rating of every movie from data*************
//sorting array in ascending order of imdbID
for(i=0; i<data.Search.length; i++){
    for(j=0; j<data.Search.length; j++){

        if(data.Search[i].imdbID > data.Search[j].imdbID){
            let temp = data.Search[i].Title
            data.Search[i].Title = data.Search[j].Title
            data.Search[j].Title = temp
    }
    }

//************extraction complete and ratings pushed in array*******************



}
}   
getTopRatedMovies();

async function getMovieCountByYear(){
    let data = await getMovieDetails(); // calling the getMovieDetails function here as this fuction got retirned the data for movies in year 2006
    console.log(data)
//*************getting counts of movies released in 2006***********
    let count =0;
for(i=0; i<data.Search.length;i++){
    count++;
    console.log("count is: "+count);
}
console.log("the movie released in year 2006 is: "+count)
//*****************calculated counts of movies released in 2006****************
}
getMovieCountByYear();
