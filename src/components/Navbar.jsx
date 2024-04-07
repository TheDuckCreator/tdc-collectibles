import _ from "lodash";
import tdcgLogo from "../assets/tdcg.png";
import TheethawatLogo from "../assets/TheethawatLogoNoSite.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ categories }) {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link className='btn btn-ghost text-xl' to='/'>
          <img src={tdcgLogo} className='h-12' />
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <details>
              <summary>หมวดหมู่</summary>
              <ul className='p-2 bg-base-100 rounded-t-none z-20'>
                <li className='z-10'>
                  <Link to='/'>ทั้งหมด</Link>
                </li>
                {_.map(categories, (each, index) => (
                  <li key={index} className='z-10'>
                    <Link to={`/category/${each?._id}`}>{each?.name}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};
