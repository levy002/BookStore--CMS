const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = [];

export const addingBookAction = (book) => ({ type: ADD_BOOK, payload: { book } });

export const removingBookAction = (id) => ({ type: REMOVE_BOOK, id });

const bookReducer = (state = initialState, action) => {
  if (action.type === ADD_BOOK) {
    return [...state,
      action.payload,
    ];
  }

  if (action.type === REMOVE_BOOK) {
    return state.filter((t) => t.id !== action.id);
  }

  return state;
};

export default bookReducer;
