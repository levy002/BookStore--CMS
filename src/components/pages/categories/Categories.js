import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from '../../../redux/categories/categories';

const Categories = () => {
  const state = useSelector((status) => status.statusReducer);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(statusCheck());
  };

  return (
    <>
      <button type="button" onClick={handleClick}>CHECK STATUS</button>
      <p>{state}</p>
    </>
  );
};

export default Categories;
