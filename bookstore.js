// // PROJECT1: `Book` class with properties like `title`, `author`, `price`, and `quantity`. The class
// //should have methods to get and set the book properties.

// class BookStore {
//   constructor(BookStorename) {
//     this.bookStoreName = BookStorename;
//     this.books = []; // chnage into object, key: book title, value: object
//   }

//   booksUpdateDetails(title, author, price, quantity) {
//     title = title;
//     author = author;
//     price = price;
//     quantity = quantity;

//     return (title,author,price,quantity);
//   }

//   booksAdd(title, author, price, quantity) {
//     title = title;
//     author = author;
//     price = price;
//     quantity = quantity;

//     const bookname = new Book(title, author, price, quantity);
//     //this.books.push(books);
//     //this.books.push(booksAdd(title, author, price,quantity))
//     this.books.push(bookname);
//     console.log("the books after adding 2 books is" +this.books);
//     return this.books;
//   }

//  // this.books.push(booksAdd(title, author, price))
//  // why outside method variables cant do operation?
  
//   removeBook(title) {
//     // HOW TO MATCH only title here, as book has 3 properties?
//     let booksAfterRemoval = [];
//     for (let i = 0; i < this.books.length; i++) {
//       if (this.books[i].title !== title) {
//         booksAfterRemoval.push(this.books[i].title);
        
//       }
//     }
//     return booksAfterRemoval;
//   }

  
// searchBookstitle(title) {
// for(let i=0; i<this.books.length; i++){
//   if(this.books[i].title === title) {
//     console.log(this.books[i])
//   }
// }
//   }

//   searchBooksAuthor(author) {
//     for(let i=0; i<this.books.length; i++){  //searching books by length of book
//       if(this.books[i].author === author) {  //(object created in class book inside method of class bookstore is saved as object in the string book)
//         console.log(this.books[i].title) // in the book[i] i.e, the object, books[i].title means the title declared in the object book, this is method of accessing
//         return this.books[i].title  //first search by this.books[i].author, when we get that display the book title using this this.books[i].title
//       }
//     }
//   }

//   searchBooksPriceRange(priceStart,priceEnd) {
//     let searchbookslist = "";
//     for(let i=0; i<this.books.length; i++){
//       if(this.books[i].price>=priceStart && this.books[i].price<=priceEnd) {
//         searchbookslist += this.books[i].title + " "
//         console.log(searchbookslist);
//       }
//     }
//     return searchbookslist;
//   }  
// }

// // function to find total price of a book (quantity wise)

// // this is class Book

//  class Book {
//   constructor(title, author, price, quantity) {
//     this.title = title;
//     this.author = author;
//     this.price = price;
//     this.quantity = quantity;
//   }

//   getTitle() {
//     return this.title;
//   }

//   setTitle(title) {
//     return (this.title = title);
//   }

//   getAuthor() {
//     return this.author;
//   }

//   setAuthor(author) {
//     return (this.author = author);
//   }

//   getPrice() {
//     return this.price;
//   }

//   setPrice(price) {
//     return (this.price = price);
//   }

//   getQuantity() {
//     return this.quantity;
//   }

//   setQuantity(quantity) {
//     return (this.quantity = quantity);
//   }
// }

// const bookStore1 = new BookStore("Library");
// //console.log("the added book is" +bookStore1.booksAdd("Maths", "Einstein", 300, 50));

// let result = bookStore1.booksAdd("universe", "einstein", 100, 50);
// bookStore1.booksAdd("childStory", "mr.sawan",500, 100);
// bookStore1.booksAdd("Biology", "Dr.Khan",400, 900);

// bookStore1.searchBookstitle("universe");

// console.log("the books in rane 100-400 are: " +bookStore1.searchBooksPriceRange(100,400));
// console.log("the books with author search is are: " +bookStore1.searchBooksAuthor("Dr.Khan"));
// console.log("book remained after removind title are: " +bookStore1.removeBook("childStory")); 


function validateInput(input) {
  if (input.length < 8) {
throw new Error("input not 8 characters")
}
  
else{
return false  
}
}
  try {
  const userInput = 'examp';
  validateInput(userInput)
  
  } catch (error) {
  console.error(error);   // console.log? and why error.length?
  }

  function validateInput(input) {
    if (input.length < 8) {
    throw new Error('Input must be at least 8 characters long.');
    }
    else{
      console.log('hgfcug')
    }
    }


    try {
    const userInput = 'example';
    validateInput(userInput);
    } catch (error) {
    console.error(error.message);
    }