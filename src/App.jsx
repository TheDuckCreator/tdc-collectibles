import { useState, useEffect } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import { Menu, Navbar, Footer } from "./components";
import { api } from "./config";
import Page from "./pages";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get(
        `${import.meta.env.VITE_APP_API_URL}/category?place=${
          import.meta.env.VITE_APP_API_PLACE_ID
        }`
      )
      .then((result) => {
        setCategories(result?.data?.rows);
      })
      .catch((err) => {
        console.error("Error Happen", err);
      });

    return () => {};
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar categories={categories} />
        <div className='  mx-2 md:mx-10 py-2 min-h-screen'>
          <div className='flex flex-wrap w-full'>
            <div className='hidden md:block md:w-1/5'>
              <Menu menuList={categories} />
            </div>
            <div className='w-full md:w-4/5 px-4'>
              <Routes>
                <Route path='/'>
                  <Route
                    path='category/:id'
                    element={<Page.CategoryArticle />}
                  />
                  <Route path='article/:id' element={<Page.ViewArticle />} />
                  <Route index element={<Page.Home />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
