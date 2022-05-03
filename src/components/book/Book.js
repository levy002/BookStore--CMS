import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getBooks, removeBook } from '../../redux/books/book';

const Book = () => {
  const Books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const percentage = Math.floor(Math.random() * 100);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <>
      {Books.length !== 0 ? (
        Books.books.map((book) => (
          <>
            <div>
              <p>{book.category}</p>
              <h2>{book.title}</h2>
              <p>{book.author}</p>

              <div>
                <button type="button">Comments</button>
                <button type="button" onClick={() => handleRemove(book.id)}>
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
          </>
        ))
      ) : (
        <h2>No Books Available</h2>
      )}
    </>
  );
};

export default Book;
