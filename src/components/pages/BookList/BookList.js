import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from '../../book/Book';
import Form from '../../form/Form';

const BookList = () => {
  const Books = [
    {
      title: 'THe Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      completed: 64,
      chapter: 'Chapter 17',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      completed: 8,
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      completed: 0,
      chapter: 'Introduction',
    },
  ];

  return (
    <>
      <ul>
        {Books.map((book) => (
          <li key={uuidv4()}>
            <Book
              title={book.title}
              author={book.author}
              completed={book.completed}
              category={book.category}
              chapter={book.chapter}
            />
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
};

export default BookList;
