let books = [
  { id: 1, title: "The Pragmatic Programmer", author: "David Thomas", genre: "Tech", available: true },
  { id: 2, title: "Educated", author: "Tara Westover", genre: "Memoir", available: true },
  { id: 3, title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", available: false },
  { id: 4, title: "Sapiens", author: "Yuval Noah Harari", genre: "History", available: true },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", available: true },
];

let nextId = 6; // use this for any new book you create

const express=require("express")
const app=express()
app.use(express.json());
 app.get("/", (req,res)=>res.send("Book API is runnig"));
 app.get("/api/books", (req, res) => res.json(books));
app.get("/api/books/:id", (req, res) => { 
  const id=Number(req.params.id)
  let book;
  for(const item of books){
    if(item.id===id){
        book=item;
        break;
    }
  }
  if(!book){
    return res.status(404).json({message: "Book not found"});
  }
res.json(book);
});

app.post("/api/books", (req,res)=>{
    const {title, author, genre}=req.body;
    let nextId;
    const newBook={
        id : nextId,
        title,
        author,
        genre
    };
    nextId++;
    books.push(newBook);
    res.status(201).json(newBook);
})

  
 app.listen(8080, () => console.log("Server running on port 8080"));