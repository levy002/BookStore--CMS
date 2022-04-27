const STATUS = 'STATUS';
const initialState = [];

export const statusCheckingAction = () => ({ type: STATUS });

const statusReducer = (state = initialState, action) => {
  if (action.type === STATUS) {
    return 'Under construction';
  }

  return state;
};

export default statusReducer;
