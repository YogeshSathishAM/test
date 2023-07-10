
async function fetchData(){
    let data = {};
    try{
    const reponse = await fetch("https://reqres.in/api/users?page=2")
 data = await reponse.json()
console.log(data);
    }  // no need of throw as there is inbuilt funct to throw the error in try catch method
    
    catch (error) {
console.log(error)
    }

for(let key1 in data){ // iterating the object which is OBJECT type
    console.log(key1) // data1 is key // using forEach of Map, also we can iterate over object
}

console.log(data.data) //getting the value using the object.key method, here both object and key have "data" name, .data is nothing but one of the keys in data
// assign the value(which is an array) to any array
let array1 = [];
array1 = data.data // assigned array having 5 index to array1
// now each index in thr array above has an object, we need to target each object and store its contents in a new array
let objectEmail = [], objectId = [];
for(i=0; i<array1.length; i++){
    objectEmail.push(array1[i].email)
}
console.log(objectEmail);

for(i=0; i<array1.length; i++){
    objectId.push(array1[i].id)
}
console.log(objectId);

// printing all 5 keys of object in an array
console.log("2 for loops");
for(i=0; i<array1.length; i++){  // point to one object, keys in answer not in order
    for(let key in array1[i]){  // point to elements in that particular object
        console.log("value in object is: "+ array1[i]['key']) // printing only key gives "key" but unable to get "value" on using object.key
    }   // here array1[i].key, will not work, as we want specific key to access the values, though value of key changes in loop, dot operation wont work in for loops
}
}
fetchData()

