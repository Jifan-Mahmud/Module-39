import { useLoaderData, useParams } from "react-router";
import { use } from "react";
import { BookContext } from "../../Context/BookContext";

const BookDetails = () => {
  const {handleMarkAsRead,handleWishList}= use(BookContext);
  console.log(handleMarkAsRead);
  const { id } = useParams();
  const book = useLoaderData();
  const expectedBook = book.find((book) => book.bookId === Number(id));
  const {bookId, bookName, author, category, rating, tags, image,publisher,yearOfPublishing,review,totalPages } = expectedBook;
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  bg-base-100 shadow-sm container mx-auto">
      <figure className="w-full flex justify-center items-center bg-gray-100 rounded-2xl">
        <img
          className = "h-[400px] "
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title">BY : {author}</h2>
        <p className="py-2 border-y border-dashed border-gray-400 pt-4 space-y-3">{category}</p>
        <p>{review}</p>
        <div className="card-body">
        <div className="flex items-center gap-2">
        {
            tags.map((tag,index )=> <div key={index} className="bg-green-500 text-white px-3 py-1 font-bold rounded-full">{tag}</div>)
        }
        </div>
        </div>
        <div className="border-t border-dashed border-gray-400 pt-4 space-y-3">
            <div className="flex justify-between items-center gap-2">
                <span>Numder of pages : </span>  <span className="font-bold"> {totalPages}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
                <span>Publisher : </span>  <span className="font-bold"> {publisher}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
                <span>Publisher Time : </span>  <span className="font-bold"> {yearOfPublishing}</span>
            </div>
            <div className="flex items-center gap-2 justify-end w-full">

          <button  className="btn" onClick={()=>handleMarkAsRead(expectedBook)}>Mark as Read</button>
          <button className="btn btn-primary" onClick={()=>handleWishList(expectedBook)}>Add to Whishlist</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
