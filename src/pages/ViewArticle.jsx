import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { api } from "../config";
import _ from "lodash";

const ViewArticle = () => {
  const [article, setArticle] = useState({});
  const [images, setImages] = useState([]);
  const params = useParams();
  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_APP_API_URL}/article/${params.id}`)
      .then((result) => {
        setArticle(result?.data);
        api
          .get(`${import.meta.env.VITE_APP_API_URL}/image?article=${params.id}`)
          .then((imageResult) => {
            setImages(_.reverse(imageResult?.data?.rows));
          });
      })
      .catch((err) => {
        console.error("Error Happen", err);
      });

    return () => {};
  }, [params]);

  return (
    <div className='w-full'>
      <div className='my-3'>
        <h3 className='text-2xl md:text-3xl font-bold mb-4'>{article?.name}</h3>
        <hr />
      </div>
      <div className='p-4'>
        <ImageGallery
          items={_.map(images, (each, index) => ({
            original: each?.url,
            thumbnail: each?.url,
            key: index,
          }))}
        />
      </div>
      <h3 className='text-xl font-bold my-4'>{article?.name}</h3>
      <p className='pb-6'>{article?.description}</p>
    </div>
  );
};

export default ViewArticle;
