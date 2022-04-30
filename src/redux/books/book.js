const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = [];

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

const bookReducer = (Books = initialState, action) => {
  if (action.type === ADD_BOOK) {
    return [...Books,
      action.payload,
    ];
  }

  if (action.type === REMOVE_BOOK) {
    return Books.filter((t) => t.id !== action.id);
  }

  return Books;
};

export default bookReducer;
