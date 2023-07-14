


const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmMwMzU5MmI3ZjRkZmI2NmU4YzY4MWUyZGZlZDlkNiIsInN1YiI6IjY0YWVhNmU3NjZhMGQzMDBhZGVhNzQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.szNJSoo3BBjKSyr-CUTbTZhCGwi-KDC55OFItuVxwS4'
  }
};


let data = fetch(url, options).then(res => res.json()).then(json => console.log(json)).catch(err => console.error('error:' + err));
console.log("data result");
console.log(data);


function searchMovies(){
  let data1 = {};
   data1 = data;
  console.log(data1);
 }
 searchMovies();

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // async function url(){
//   let data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=9bc03592b7f4dfb66e8c681e2dfed9d6');
// console.log(data);
// }
// url();