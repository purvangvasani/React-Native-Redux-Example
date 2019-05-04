import { ADD_USER } from './types';

export const addUser = userName => {
  return {
    type: ADD_USER,
    payload: userName
  }
}