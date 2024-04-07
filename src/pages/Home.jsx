import { useState, useEffect } from "react";
import { api } from "../config";
import { ThumbnailList } from "../components";

const Home = () => {
  const page = 1;
  const [article, setArticles] = useState([]);
  const [size, setSize] = useState(10);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    api
      .get(
        `${import.meta.env.VITE_APP_API_URL}/article?page=${page}&size=${size}`
      )
      .then((result) => {
        console.log("Result.data", result.data);
        setArticles(result?.data?.rows);
        setTotal(result?.data?.total);
      })
      .catch((err) => {
        console.error("Error Happen", err);
      });

    return () => {};
  }, [size]);

  return (
    <div className='w-full'>
      <ThumbnailList articles={article} />
      {size < total && (
        <div className='flex justify-center my-4'>
          <button
            className='btn btn-wide btn-sm'
            onClick={() => {
              setSize(size + 10);
            }}
          >
            โหลดเพิ่ม
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
