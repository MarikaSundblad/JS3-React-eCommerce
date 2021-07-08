import actiontypes from '../actiontypes';
import axios from 'axios';
import { getUsers } from './usersActions';

export const getUser = id => {
  return dispatch => {
    dispatch(loading())
    axios.get(`https://fakestoreapi.com/users/${id}`)
    .then(res => dispatch(success(res.data)))
    .catch(err => dispatch(failure(err.message)))
  }
}

export const updateUser = (id, user) => {
  return dispatch => {
    dispatch(loading())
    axios.patch(`https://fakestoreapi.com/users/${id}`, user)
    .then(() => dispatch(getUsers()))
    .catch(err => dispatch(failure(err.message)))
  }
}

export const deleteUser = id => {
  return dispatch => {
    dispatch(loading())
    axios.delete(`https://fakestoreapi.com/users/${id}`)
    .then(() => dispatch(getUsers()))
    .catch(err => dispatch(failure(err.message)))
  }
}


export const loading = () => {
  return {
    type: actiontypes().user.loading
  }
}

export const success = (users) => {
  return {
    type: actiontypes().user.success,
    payload: users
  }
}

export const failure = (error) => {
  return {
    type: actiontypes().user.failure,
    payload: error
  }
}
