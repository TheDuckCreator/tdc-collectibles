import _ from "lodash";
const Menu = ({ menuList }) => {
  return (
    <div>
      <ul className='menu w-56 rounded-box'>
        <li className='menu-title'>หมวดหมู่</li>
        {_.map(menuList, (each, index) => (
          <li key={index} className=''>
            <a className='active:bg-accent focus:bg-accent'>{each?.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
