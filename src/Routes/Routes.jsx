import { createBrowserRouter } from "react-router";

import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import Books from "../pages/Books/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "books",
        element:<Books></Books>,
      },
      {
        path: "/booksDetails/:id",
        element:<BookDetails></BookDetails>,
        loader: () => fetch("/booksData.json"),
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);

export default router;