import { useState, useEffect } from "react";
import { Menu, Navbar } from "./components";
import { api } from "./config";

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
      <Navbar />
      <div className='container mx-2 md:mx-10 py-2'>
        <div className='flex flex-wrap'>
          <div className='hidden md:block md:w-1/5'>
            <Menu menuList={categories} />
          </div>
          <div className='w-full md:w-4/5'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
