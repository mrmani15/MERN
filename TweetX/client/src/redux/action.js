import axios from 'axios'
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  USER_DETAIL_ERROR,
  GET_USER_DETAIL,
  GET_ALL_USER_FAILURE,
  GET_ALL_USER_SUCCESS,
  SIGN_OUT,
  FIRST_POST_PROFILE_CREATE_SUCCESS,
  FIRST_POST_PROFILE_CREATE_FAILURE,
  POST_UPDATE_FAILURE,
  POST_UPDATE_SUCCESS
} from './actionType'

export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ name, email, password })

  try {
    const res = await axios.post('http://localhost:5000/api/user', body, config)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })

  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE
    })
  }
}

export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password })

  try {
    const res = await axios.post('http://localhost:5000/api/auth', body, config)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE
    })
  }
}

export const getDetail = () => async dispatch => {
  const sec = localStorage.getItem('token')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': sec
    }
  }

  try {
    const res = await axios.get('http://localhost:5000/api/profile/me', config)
    dispatch({
      type: GET_USER_DETAIL,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: USER_DETAIL_ERROR
    })
  }
}

export const getAllUser = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/profile/')
    dispatch({
      type: GET_ALL_USER_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_USER_FAILURE,
      payload: 'something wrong'
    })
  }
}

export const logout = () => {
  return {
    type: SIGN_OUT
  }
}

export const firstProfileWithPost = ({ post, follower, following }) => async dispatch => {
  const sec = localStorage.getItem('token')
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': sec
    }
  }

  const body = JSON.stringify({ post, follower, following })

  try {
    const res = await axios.post('http://localhost:5000/api/profile', body, config)
    dispatch({
      type: FIRST_POST_PROFILE_CREATE_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: FIRST_POST_PROFILE_CREATE_FAILURE,
      payload: 'something error'
    })
  }
}

export const updatePost = ( {post}) => async dispatch => {
  const sec = localStorage.getItem('token')
  console.log(post)
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': sec
    }
  }

  const body = JSON.stringify({ post })

  try {
    const res = await axios.post('http://localhost:5000/api/profile', body, config)
    dispatch({
      type: POST_UPDATE_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POST_UPDATE_FAILURE,
      payload: 'something error'
    })
  }
}