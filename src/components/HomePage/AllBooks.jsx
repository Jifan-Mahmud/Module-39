import { use } from "react";
import SingleBook from "./SingleBook";
const BooksPrmise = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
    const Books = use(BooksPrmise)
    console.log(Books)
    
    return (
        <div className="my-12 container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-10">All Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {
                Books.map(book => <SingleBook key={book.bookId} book={book}></SingleBook>)
            }
            </div>
        </div>
    );
};

export default AllBooks;