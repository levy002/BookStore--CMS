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
    <section>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input
          id="book-title"
          type="text"
          placeholder="Book title"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
        <input
          id="book-author"
          type="text"
          placeholder="Book author"
          name="author"
          value={author}
          onChange={handleChange}
          required
        />

        <select
          id="book-category"
          type="text"
          placeholder="Book author"
          name="category"
          value={category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Category</option>
          <option value="Sci-fi">Sci-fi</option>
          <option value="Action">Action</option>
          <option value="Mystery">Mystery</option>
          <option value="Programming">Programming</option>
          <option value="Politics">Politics</option>
        </select>

        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
