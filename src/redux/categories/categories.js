const STATUS = 'STATUS';
const initialState = '';

export const statusCheck = () => ({ type: STATUS });

const statusReducer = (status = initialState, action) => {
  if (action.type === STATUS) {
    return 'Under construction';
  }

  return status;
};

export default statusReducer;
