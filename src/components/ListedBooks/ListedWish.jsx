import { use } from "react";
import { BookContext } from "../../Context/BookContext";
import SingleBook from "../../components/HomePage/SingleBook";
import { useEffect, useState } from "react";
const ListedWish = ({sortingBooks}) => {
  const { wishList } = use(BookContext);

   const [filteredWishList, setFilteredWishList] = useState(wishList);
  
      useEffect(() => {
          if(sortingBooks){
              if(sortingBooks === 'pages'){
                  const sortedReadList = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
                  setFilteredWishList(sortedReadList);
              }
              else if(sortingBooks === 'rating'){
                  const sortedReadList = [...wishList].sort((a, b) => a.rating - b.rating);
                  setFilteredWishList(sortedReadList);
              }
          }
        }, [sortingBooks,wishList]);

  if (filteredWishList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center ">
          No Wish List Data Found 
        </h1>
      </div>
    );
  }
  return (
    <div>
      {filteredWishList.map((book) => (
        <SingleBook key={book.bookId} book={book}></SingleBook>
      ))}
    </div>
  );
};

export default ListedWish;
