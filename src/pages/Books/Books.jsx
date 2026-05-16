import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import ListedRead from "../../components/ListedBooks/ListedRead";
import ListedWish from "../../components/ListedBooks/ListedWish";

const Books = () => {
    const [sortingBooks, setSortingBooks] = useState("");
    console.log(sortingBooks);
  return (
    <div className="container mx-auto my-5">
        <div className="flex justify-center my-3">
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">
        Sort By {sortingBooks} ⬇️
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={()=> setSortingBooks('pages')}>
            <a>Pages</a>
          </li>
          <li onClick={()=> setSortingBooks('rating')}>
            <a>Rating</a>
          </li>
        </ul>
      </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedRead sortingBooks={sortingBooks}></ListedRead>
        </TabPanel>
        <TabPanel>
          <ListedWish sortingBooks={sortingBooks}></ListedWish>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
