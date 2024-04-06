import _ from "lodash";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Menu = ({ menuList }) => {
  return (
    <div>
      <ul className='menu w-56 rounded-box'>
        <li className='menu-title'>หมวดหมู่</li>
        <li className=''>
          <Link to={`/`} className='active:bg-accent focus:bg-accent'>
            ทั้งหมด
          </Link>
        </li>
        {_.map(menuList, (each, index) => (
          <li key={index} className=''>
            <Link
              to={`/category/${each?._id}`}
              className='active:bg-accent focus:bg-accent'
            >
              {each?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

Menu.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.object),
};
