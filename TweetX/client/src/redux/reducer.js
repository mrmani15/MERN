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
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAILURE

} from './actionType'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  profile: null,
  error: {},
  alluser: null,
  allUserError: null,
  newRegister: false,
  isUser: true,
  // firstProfilePost: null,
  // firstPostError: null,
  postError:null
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        newRegister: true
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case SIGN_OUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        newRegister: null,
        isUser: true,
        profile: null,
        alluser: null,
        firstPostError: null,
      }
    case GET_USER_DETAIL:
      return {
        ...state,
        profile: payload,
      }
    case USER_DETAIL_ERROR:
      return {
        ...state,
        isUser: false
      }
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        alluser: payload
      }
    case GET_ALL_USER_FAILURE:
      return {
        ...state,
        allUserError: payload
      }
    case FIRST_POST_PROFILE_CREATE_SUCCESS:
      return {
        ...state,
        // profile: payload,
      }
    case FIRST_POST_PROFILE_CREATE_FAILURE:
      return {
        ...state,
        firstPostError: payload
      }
    case POST_UPDATE_SUCCESS:
      return{
        ...state,
        // profile: payload,
        // profile: payload
      }
    case POST_UPDATE_FAILURE:
      return {
        ...state,
        firstPostError: null,
        postError: payload
      }
    default:
      return state
  }
}