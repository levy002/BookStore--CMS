import React from 'react';
import Book from '../../book/Book';
import Form from '../../form/Form';

const BookList = () => (
  <>
    <section className="flex flex-col gap-9">
      <Book />
    </section>
    <div className="w-11/12 mx-auto my-10">
      <hr className="border" />
    </div>
    <Form />
  </>
);

export default BookList;
