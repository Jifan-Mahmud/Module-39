import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const BookContext = createContext();

const BookProvider = ({children}) => {
    const [storeBook, setStoreBook] = useState([]);
    const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook)=> {

    console.log("Current Book",currentBook)
    const isExist = storeBook.find((book) => book.bookId === currentBook.bookId);
    if (isExist) {
      toast.error(`${currentBook.bookName}  Already Marked as Read`);
      return;
    }
    else {
      setStoreBook([...storeBook, currentBook]);
      toast.success(`${currentBook.bookName} added Marked as Read`);
      return;
    }

  }

  const handleWishList = (currentBook)=> {

    console.log("Current Book",currentBook)
    const isExistStoreBook = storeBook.find((book) => book.bookId === currentBook.bookId);
    if (isExistStoreBook) {
      toast.error(`${currentBook.bookName} Already Marked as Read`);
      return;
    }
    const isExist = wishList.find((book) => book.bookId === currentBook.bookId);
    if (isExist) {
      toast.error(`${currentBook.bookName}  Already wishlisted`);
      return;
    }
    else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} added wishlisted`);
      return;
    }

  }
    const data = {

        setStoreBook,storeBook,handleMarkAsRead,handleWishList,wishList,setWishList

    };
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
export {BookContext};