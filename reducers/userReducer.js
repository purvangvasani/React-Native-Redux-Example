import { ADD_USER } from '../actions/types';

const initialState = {
  userName: '',
  users: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
}

export default userReducer;