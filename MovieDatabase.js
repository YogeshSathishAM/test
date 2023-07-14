//encapsulated the fetching part inside a function so that fetched data can be assigned to "data" variable
const fetchData = async () => {

  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmMwMzU5MmI3ZjRkZmI2NmU4YzY4MWUyZGZlZDlkNiIsInN1YiI6IjY0YWVhNmU3NjZhMGQzMDBhZGVhNzQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.szNJSoo3BBjKSyr-CUTbTZhCGwi-KDC55OFItuVxwS4'
    }
  };


  let data = await fetch(url, options)
  data = await data.json()
  console.log("data result");
  console.log(data);
  //return the data object from the fetch result to the calling function
  return data

}
// convert below function to async
async function searchMovies(){
  let data1 = {}; 
  // await for the data to be fetched and assigning is complete
   data1 =await fetchData()
  console.log("data1",data1);
}

 searchMovies();

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // async function url(){
//   let data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=9bc03592b7f4dfb66e8c681e2dfed9d6');
// console.log(data);
// }
// url();