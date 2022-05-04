import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/book';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  const handleChange = (e) => {
    if (e.target.id === 'book-title') {
      setTitle(e.target.value);
    }

    if (e.target.id === 'book-author') {
      setAuthor(e.target.value);
    }

    if (e.target.id === 'book-category') {
      setCategory(e.target.value);
    }
  };

  return (
    <section className="flex flex-col gap-6 w-11/12 mx-auto">
      <h3 className="font-montserrat font-bold text-warm-grey text-xl">ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          id="book-title"
          className="border w-1/4 px-2 rounded bg-white text-pink-grey font-base font-montserrat font-normal leading-normal"
          type="text"
          placeholder="Book title"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
        <input
          id="book-author"
          className="border w-1/4 px-2 rounded bg-white text-pink-grey font-base font-montserrat font-normal leading-normal"
          type="text"
          placeholder="Book author"
          name="author"
          value={author}
          onChange={handleChange}
          required
        />

        <select
          id="book-category"
          className="border w-1/4 px-2 rounded bg-white text-pinkish-grey font-base font-montserrat font-normal leading-normal"
          type="text"
          placeholder="Book author"
          name="category"
          value={category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Category</option>
          <option value="Sci-fi" className="text-black-two">Sci-fi</option>
          <option value="Action" className="text-black-two">Action</option>
          <option value="Mystery" className="text-black-two">Mystery</option>
          <option value="Programming" className="text-black-two">Programming</option>
          <option value="Politics" className="text-black-two">Politics</option>
        </select>

        <button type="submit" className="text-white text-center font-bold font-roboto font-sm leading-normal py-2 px-8 rounded bg-azure ">ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
