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

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <>
      {Books.length !== 0 ? (
        Books.books.map((book) => (
          <>
            <div className="flex justify-between items-center p-5 bg-white border w-11/12 mx-auto">
              <div className="flex flex-col gap-4 self-start">
                <div>
                  <p className="text-zinc-500">{book.category}</p>
                  <h2 className="text-4xl text-black-two font-roboto font-bold">
                    {book.title}
                  </h2>
                  <p className="text-cool-blue font-roboto font-light">
                    {book.author}
                  </p>
                </div>
                <div className="flex gap-3 text-cool-blue font-roboto font-light">
                  <button type="button">Comments</button>
                  <div>
                    <hr className="border w-0.5 h-6" />
                  </div>
                  <button type="button" onClick={() => handleRemove(book.id)}>
                    Remove
                  </button>
                  <div>
                    <hr className="border w-0.5 h-6" />
                  </div>
                  <button type="button">Edit</button>
                </div>
              </div>
              <div className="flex w-3/5 justify-center gap-12 items-center">
                <div className="flex justify-center gap-3 items-center">
                  <div className="w-20 h-20">
                    <CircularProgressbar
                      value={Math.floor(Math.random() * 100)}
                    />
                  </div>
                  <div>
                    <p className="text-4xl text-black-two w-16 font-montserrat">
                      {`${Math.floor(
                        Math.random() * 100,
                      )}%`}

                    </p>
                    <p className="text-zinc-400 text-sm font-montserrat w-20 text-black-two opacity-75 leading-normal">
                      completed
                    </p>
                  </div>
                </div>
                <div>
                  <hr className="border w-0.5 h-20" />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-roboto font-light text-black-two text-sm opacity-50">
                      CURRENT CHAPTER
                    </p>
                    <p className="font-robot0 font-light text-black-two font-base leading-normal">
                      {`Chapter ${Math.floor(Math.random() * 100)}`}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="font-roboto font-light leading-normal rounded font-xs text-white text-center bg-azure py-1 px-4"
                  >
                    UPDATE PROGRESS
                  </button>
                </div>
              </div>
            </div>
          </>
        ))
      ) : (
        <>
          <h2 className="border p-8 text-center w-11/12 mx-auto bg-white">Please add more books!!</h2>
        </>
      )}
    </>
  );
};

export default Book;
