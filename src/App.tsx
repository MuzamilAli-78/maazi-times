import "./App.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
import ArticleDetails from "./pages/ArticleDetails";
import ProtectedRoutes from "./components/ProtectedRoutes";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="category">
        <Route index element={<Category />} /> 
        <Route path=":name" element={<Category />}>
          <Route path=":articleId" element={ <ProtectedRoutes> <ArticleDetails /> </ProtectedRoutes>} />
        </Route>
      </Route>

      <Route path="search" element={<Search />} >
        <Route path=":articleId" element={<ArticleDetails />} />
      </Route>

      <Route path=":articleId" element={ <ProtectedRoutes> <ArticleDetails /> </ProtectedRoutes>} />
    </Route>
  )
)
 

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
