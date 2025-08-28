
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import RootLayout from "./layouts/RootLayout";
import Home from './pages/Home'
import Category from './pages/Category'
import Search from './pages/Search'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="category" element={<Category />} />
      <Route path="search" element={<Search />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
