import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from '../../../redux/categories/categories';

const Categories = () => {
  const state = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(statusCheck());
  };

  return (
    <div className="absolute inset-2/4 inset-x-1/3">
      <button type="button" onClick={handleClick} className="bg-azure font-sm font-normal rounded border text-white py-2 px-4">CHECK STATUS</button>
      <p className="text-red-600 mt-1.5">{state}</p>
    </div>
  );
};

export default Categories;
