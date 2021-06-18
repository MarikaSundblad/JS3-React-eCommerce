import axios from 'axios';
import jwt from 'jsonwebtoken';
import actiontypes from '../actiontypes';
import { getUsers } from './usersActions';

const apiCall = (url, data, dispatch) => {
  axios.post(url, data)
  .then(res => {
    dispatch(checkAdmin(res.data.accessToken))
  })
  .catch(err => {
    dispatch(failure(err.message))
  })
}

export const addUser = (user) => {
  return dispatch => {
    dispatch(loading())
    axios.post('http://localhost:3000/users', user)
    .then(() => {
      dispatch(getUsers())
    })
    .catch(err => dispatch(failure(err.message)))
  }
}

export const login = user => {
  return dispatch => {
    dispatch(loading())
    apiCall('http://localhost:3000/login', user, dispatch)
  }
}

export const register = (user) => {
  return dispatch => {
    dispatch(loading())
    apiCall('http://localhost:3000/register', user, dispatch)
  }
}

export const logout = () => {
  return {
    type: actiontypes().auth.logout
  }
}

export const checkAdmin = token => {
  return dispatch => {
    localStorage.setItem('token', token)
    const id = jwt.decode(token).sub;
    axios.get(`http://localhost:3000/users/${id}`)
    .then(res => {
      dispatch(success({token, admin: res.data.admin}))
    })
  }
}

export const loading = () => {
  return {
    type: actiontypes().auth.loading
  }
}

export const success = ({token, admin}) => {
  return {
    type: actiontypes().auth.success,
    payload: {token, admin}
  }
}

export const failure = error => {
  return {
    type: actiontypes().auth.failure,
    payload: error
  }
}

export const checkUser = () => {
  return dispatch => {
    let token = localStorage.getItem('token')
    if(token) {      
      if(jwt.decode(token).exp < Date.now()) {
        dispatch(checkAdmin(token))
      }
      else {
        localStorage.removeItem('token')
      }
    }
  }
}