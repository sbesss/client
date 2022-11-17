import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const names = ['Главная', 'Услуги и цены', 'Организациям'];
  const links = ['/', 'uslugi-i-tseny', 'for-org'];
  const onClickCategory = (i) => {
    setActiveCategory(i);
  };
  return (
    <div>
      <ul className="list">
        {names.map((value, i) => (
          <Link to={links[i]}>
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={activeCategory === i ? 'active' : ''}>
              {value}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
