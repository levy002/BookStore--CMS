import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/book';

const Book = ({
  title, author, percentage, id,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <section>
      <div>
        <p>Action</p>
        <h2>{title}</h2>
        <p>{author}</p>

        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemove}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
        <div>
          <p>{`${percentage}%`}</p>
          <p>completed</p>
        </div>
      </div>

      <div className="chapter-progress">
        <p>CURRENT CHAPTER</p>
        <p>chapter 20</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </section>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
