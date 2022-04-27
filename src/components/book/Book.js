import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  title, author, completed, chapter, category,
}) => (
  <section>
    <div>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{author}</p>

      <div>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>

    <div>
      <CircularProgressbar value={completed} text={`${completed}%`} />
      <div>
        <p>{`${completed}%`}</p>
        <p>completed</p>
      </div>
    </div>

    <div className="chapter-progress">
      <p>CURRENT CHAPTER</p>
      <p>{chapter}</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>

  </section>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
};

export default Book;
