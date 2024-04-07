import _ from "lodash";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function MiniThumbnail({ articles }) {
  return (
    <div className='p-2 flex w-full overflow-x-auto'>
      {_.map(articles, (each, index) => (
        <div key={index} className='w-48'>
          <Link
            className='card bg-base-100 shadow-md m-2 h-48'
            to={`/article/${each?._id}`}
          >
            <figure className='h-24'>
              <img src={each?.image?.url} alt={each?.name} className='' />
            </figure>
            <div className='card-body p-3'>
              <h3 className='card-title text-sm'>
                {_.truncate(each?.name, { length: 24 })}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MiniThumbnail;

MiniThumbnail.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};
