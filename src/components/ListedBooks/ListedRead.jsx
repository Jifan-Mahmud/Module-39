import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookContext";
import SingleBook from "../../components/HomePage/SingleBook";

const ListedRead = ({ sortingBooks }) => {
    const { storeBook } = useContext(BookContext);
    const [filteredReadList, setFilteredReadList] = useState(storeBook);

    useEffect(() => {
        if(sortingBooks){
            if(sortingBooks === 'pages'){
                const sortedReadList = [...storeBook].sort((a, b) => a.totalPages - b.totalPages);
                console.log(sortedReadList)
                setFilteredReadList(sortedReadList);
            }
            else if(sortingBooks === 'rating'){
                const sortedReadList = [...storeBook].sort((a, b) => a.rating - b.rating);
                console.log(sortedReadList)
                setFilteredReadList(sortedReadList);
            }
        }
      }, [sortingBooks,storeBook]);
    
    if (filteredReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center ">
          No Read List Data  Found 
        </h1>
      </div>
    );
  }

    return (
        <div>
            {
                filteredReadList.map((book) => (
                    <SingleBook key={book.bookId} book={book}></SingleBook>
                ))
            }
        </div>
    );
};

export default ListedRead;