import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { api } from "../config";
import { ThumbnailList } from "../components";

const CategoryArticle = () => {
  const [page, setPage] = useState(1);
  const [article, setArticles] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState({});
  const [size, setSize] = useState(10);
  const params = useParams();
  useEffect(() => {
    api
      .get(
        `${
          import.meta.env.VITE_APP_API_URL
        }/article?page=${page}&size=${size}&category=${params.id}`
      )
      .then((result) => {
        setArticles(result?.data?.rows);
        api
          .get(`${import.meta.env.VITE_APP_API_URL}/category/${params.id}`)
          .then((categoryResult) => {
            setCategoryInfo(categoryResult?.data);
          });
      })
      .catch((err) => {
        console.error("Error Happen", err);
      });

    return () => {};
  }, [params]);

  return (
    <div className='w-full'>
      <div className='mb-3'>
        <h3 className='text-xl md:text-3xl font-bold mb-4'>
          {categoryInfo?.name}
        </h3>
        <hr />
      </div>
      <ThumbnailList articles={article} />
    </div>
  );
};

export default CategoryArticle;
