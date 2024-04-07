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
              <img src={each?.image?.url} alt={each?.name} />
            </figure>
            <div className='card-body'>
              <h3 className='card-title text-base'>
                {_.truncate(each?.name, { length: 56 })}
              </h3>
              <p>
                {_.map(each?.categories, (category, index) => (
                  <div className='badge badge-accent' key={index}>
                    {category?.name}
                  </div>
                ))}
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
