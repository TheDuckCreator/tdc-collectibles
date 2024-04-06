import { useState, useEffect } from "react";
import { api } from "../config";
import { ThumbnailList } from "../components";

const Home = () => {
  const [page, setPage] = useState(1);
  const [article, setArticles] = useState([]);
  const [size, setSize] = useState(10);
  useEffect(() => {
    api
      .get(
        `${import.meta.env.VITE_APP_API_URL}/article?page=${page}&size=${size}`
      )
      .then((result) => {
        setArticles(result?.data?.rows);
      })
      .catch((err) => {
        console.error("Error Happen", err);
      });

    return () => {};
  }, []);
  return (
    <div className='w-full'>
      <ThumbnailList articles={article} />
    </div>
  );
};

export default Home;
