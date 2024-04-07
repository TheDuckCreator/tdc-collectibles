import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import dayjs from "dayjs";
import "dayjs/locale/th";

import { api } from "../config";
import _ from "lodash";
import { MiniThumbnail } from "../components";
import { Link } from "react-router-dom";

dayjs.locale("th");

const ViewArticle = () => {
  const [article, setArticle] = useState({});
  const [otherArticles, setOtherArticles] = useState([]);
  const [images, setImages] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    api
      .get(
        `${import.meta.env.VITE_APP_API_URL}/article/?category=${
          article?.categories?.[0]?._id
        }&page=1&size=4`
      )
      .then((result) => {
        setOtherArticles(result?.data?.rows);
      })
      .catch((err) => {
        console.error("Error Happen", err);
      });

    return () => {};
  }, [article]);

  return (
    <div className='w-full'>
      {/* <div className='my-3'>
        <h3 className='text-2xl md:text-3xl font-bold mb-4'>{article?.name}</h3>
        <hr />
      </div> */}
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
      <p className=''>
        หมวดหมู่ :{" "}
        {_.map(article?.categories, (category, index) => (
          <span className='badge badge-ghost' key={index}>
            {category?.name}
          </span>
        ))}
      </p>
      <p className='py-2'>
        ช่วงเวลาที่ได้มา : {dayjs(article?.date).format("D MMMM YYYY")}
      </p>
      <div className='my-6'>
        <p className='font-semibold'>สิ่งของอื่น ๆ ในหมวดหมู่เดียวกัน</p>
        <MiniThumbnail articles={otherArticles} />
      </div>
      <div className='my-6 flex gap-2 justify-end'>
        <button
          className='btn'
          onClick={() => {
            navigate(-1);
          }}
        >
          กลับ
        </button>
        <Link to='/'>
          <button className='btn btn-neutral'>รายการทั้งหมด</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewArticle;
