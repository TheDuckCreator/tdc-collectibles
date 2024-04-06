import _ from "lodash";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function ThumbnailList({ articles }) {
  return (
    <div className='p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {_.map(articles, (each, index) => (
        <div key={index}>
          <Link
            className='card bg-base-100 shadow-xl m-2'
            to={`/article/${each?._id}`}
          >
            <figure>
              <img
                src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                alt={each?.name}
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{each?.name}</h2>
              <p>
                <div className='badge badge-ghost'>{each?.category?.name}</div>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ThumbnailList;

ThumbnailList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};
