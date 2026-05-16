import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const SingleBook = ({ book }) => {
  return (
    <Link to={`/booksDetails/${book.bookId}`} className="card bg-base-100 w-96 shadow-sm">
      <figure className="p-6">
        <img className="rounded-2xl h-[200px]" src={book.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
        {
            book.tags.map((tag,index )=> <div key={index} className="bg-green-500 text-white px-3 py-1 font-bold rounded-full">{tag}</div>)
        }
        </div>
        <h2 className="card-title text-2xl">{book.bookName}</h2>
        <p className="font-semibold text-lg">{book.author}</p>
        <div className="card-actions justify-between border-t border-dashed border-gray-400 pt-4">
          <div className="font-semibold">{book.category}</div>
          <div className="flex items-center gap-1 font-semibold">{book.rating}<FaRegStar /></div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
