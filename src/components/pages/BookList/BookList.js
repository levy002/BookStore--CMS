import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../../book/Book';
import Form from '../../form/Form';

const BookList = () => {
  const Books = useSelector((Books) => Books.bookReducer);

  return (
    <>
      <ul>
        {Books.length !== 0 ? (
          Books.map((book) => (
            <li key={book.id}>
              <Book
                title={book.title}
                author={book.author}
                percentage={Math.floor(Math.random() * 100)}
                id={book.id}
              />
            </li>
          ))
        ) : (
          <li>
            <h2>No Books Availabe!!</h2>
          </li>
        )}
      </ul>
      <Form />
    </>
  );
};

export default BookList;
