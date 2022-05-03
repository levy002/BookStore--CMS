import BookStoreApi from '../../api/BookStoreApi';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';

export const getBooksAction = (books) => ({
  type: GET_BOOKS,
  payload: books,
});

const addBookAction = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const initialState = {
  books: [],
};

export const getBooks = () => (dispatch) => {
  const books = BookStoreApi.getBook();
  books.then((res) => {
    const books = Object.keys(res.data).map((key) => {
      const book = res.data[key][0];
      return {
        id: key,
        ...book,
      };
    });
    dispatch(getBooksAction(books));
  });
};

export const addBook = (newBook) => (dispatch) => {
  BookStoreApi.addBook(newBook);
  BookStoreApi.getBook()
    .then((res) => {
      if (res.status === 200) {
        dispatch(addBookAction(newBook));
      }
    });
};

export const removeBook = (id) => (dispatch) => {
  BookStoreApi.removeBook(id)
    .then((res) => {
      if (res.status === 201) {
        dispatch(removeBookAction(id));
      }
    });
};

const bookReducer = (state = initialState, action) => {
  if (action.type === ADD_BOOK) {
    return {
      ...state,
      books: state.books.concat(action.payload),
    };
  }

  if (action.type === REMOVE_BOOK) {
    return {
      ...state,
      books: state.books.filter((book) => book.id !== action.id),
    };
  }

  if (action.type === GET_BOOKS) {
    return {
      ...state,
      books: action.payload,
    };
  }

  return state.books;
};

export default bookReducer;
