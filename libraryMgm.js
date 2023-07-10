class Library {
    constructor(books,patrons,borrowedRecords){
this.book = books;
this.patrons = patrons;
this.borrowedRecords = borrowedRecords;
this.PatronInventory = [];
this.bookInventory = [];
    }
// methods for adding new books to the library, registering new patrons, 
//handling book borrowing and returning, and maintaining borrowing records. 

addNewBooks(title, author, isbn){

let tempBookHolder = {title, author, isbn}
this.bookInventory.push(tempBookHolder);
console.log("books added are" +this.bookInventory);
return this.bookInventory
}

registerNewPatrons(name,email,id) {

let tempHoldPatron = {name,email,id}
this.PatronInventory.push(tempHoldPatron);
for(let i=0; i<this.PatronInventory.length;i++){
console.log("patron after each entry is" +this.PatronInventory[i].name);}

return this.PatronInventory;
}
}

class book{
    constructor(title, author, isbn){  // assign true or false to availability as per the availability
        this.title = title;
        this.author = author;
        this.isbn = isbn
        //this.availability = availability;
}
TotalBooks = [];
// It should also have methods for retrieving book details and updating the availability status.
 TotalBooks = library1.bookInventory // object created outside class has global scope

 retrieveBooks(anyValue){
    let retrievebooks = []
    for(let i=0; i<this.TotalBooks.length; i++) {

    if(this.TotalBooks[i].title === anyValue){
console.log("book can be retrieved");
retrievebooks.push(this.TotalBooks[i])
return this.TotalBooks[i].title;
}
else{
    console.log("book cant be retrieved")
}


if(this.TotalBooks[i].author === anyValue){
    console.log("book can be retrieved");
    retrievebooks.push(this.TotalBooks[i])
    return this.TotalBooks[i].title;
    }
    else{
        console.log("book cant be retrieved")
    }
  
    if(this.TotalBooks[i].isbn === anyValue){
        console.log("book can be retrieved");
        retrievebooks.push(this.TotalBooks[i])
        return this.TotalBooks[i].title;
        }
        else{
            console.log("book cant be retrieved")
        }
    }

}

availabilityStatus(books){
if(this.availability){
    console.log("book not available")
}
else{
    console.log("book is available");
}
}
}

class patron {
    constructor(name, email, borrowedBooks){
this.name = name;
this.email = email;
this.borrowedBooks = borrowedBooks

    }
// such as borrowing and returning books, as well as viewing borrowed books.

borrowedBook(){
let borrowedBooksList= [];
for(let i=0; i<this.borrowedBooks.length; i++){
borrowedBooksList.push(" " +this.borrowedBooks[i])
console.log(this.borrowedBooks[i])
}
console.log(borrowedBooksList);
   return borrowedBooksList;
}

returnedBooks(book){
    let returnedBooks = [];
    returnedBooks.push(book);
    console.log("the returned books are" +returnedBooks)
    return returnedBooks
}

viewBooks(book){
    let viewBooks = [];
    viewBooks.push(book);
    console.log("the book viewed is " +book)
}
}

// instance creation and method calling
const library1 = new Library("0","0","0");
library1.addNewBooks("physics", "MrA", 10);
library1.addNewBooks("chemistry", "MrB", 20);
library1.addNewBooks("maths", "MrC", 30);
library1.addNewBooks("biology", "MrD", 40);

library1.registerNewPatrons("yogesh", "yog.com", 1000);
library1.registerNewPatrons("manish", "man.com", 2000);
library1.registerNewPatrons("suhas", "suh.com", 3000);

const yogesh = new patron("yogesh", "yog.com",["maths","physics"]);

console.log("books borrowed by yogesh is" +yogesh.borrowedBook());
yogesh.returnedBooks("maths");
console.log(yogesh.returnedBooks("physics"));
yogesh.viewBooks("biology");

const book1 = new book("physics","","");
console.log("the book retrieved is " +book1.retrieveBooks("MrD"));
