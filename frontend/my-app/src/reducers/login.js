import {LOGIN} from '../actions/types';

const initialState = [];

const loginReducer = (login = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOGIN:
      return [...login, payload];

    default:
      return login;
  }
};

export default loginReducer;
