// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import arrowDown from '../../assets/images/arrow-down.svg';
import MyContext from '../../context/MyContext';
import './btnTableStyle.scss';

function BtnHeaderTable({ title, keyObj }) {
  const { filter, setFilter } = useContext(MyContext);

  const resetObj = {
    id: false,
    name: false,
    mobile: false,
    email: false,
  };

  const arrow = filter[keyObj] ? 'up' : 'down';

  function handleClick() {
    const titles = ['id', 'name', 'mobile', 'email'];
    const [select] = titles.filter((ele) => (filter[ele] === true));
    if (select && select === keyObj) {
      setFilter({ ...resetObj });
    } else {
      titles.forEach((item) => {
        if (keyObj === item) {
          setFilter({
            ...resetObj,
            [item]: true,
          });
        }
      });
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="table-btn"
    >
      <p>{title}</p>
      <img src={arrowDown} alt="Seta apontando para baixo" className={arrow} />
    </button>
  );
}

BtnHeaderTable.propTypes = {
  title: PropTypes.string.isRequired,
  keyObj: PropTypes.string.isRequired,
};

export default BtnHeaderTable;
