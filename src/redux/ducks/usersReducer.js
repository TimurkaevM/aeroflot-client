import { api } from '../../api/api';

export const LOGIN_START = 'user/login/start';
export const LOGIN_SUCCESS = 'user/login/success';
export const LOGIN_ERROR = 'user/login/error';
export const POST_LOGIN = 'user/login/post';
export const AUTH_START = 'user/auth/start';
export const AUTH_SUCCESS = 'user/auth/success';
export const AUTH_FINALLY = 'user/auth/finally';
export const CREATE_START = 'user/create/start';
export const CREATE_SUCCESS = 'user/create/success';
export const CREATE_ERROR = 'user/create/error';
export const LOGOUT = 'user/logout';
export const CHANGE_ERROR = 'error/change';

const initialState = {
  currentUser: {},
  isAuth: false,
  loading: false,
  error: '',
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        isAuth: true,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case AUTH_START:
      return {
        ...state,
        loading: true,
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        isAuth: true,
      };

    case AUTH_FINALLY:
      return {
        ...state,
        loading: false,
      };

    case CREATE_START:
      return {
        ...state,
        loading: true,
      };

    case CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CREATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };

    case CHANGE_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
}

export const auth = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_START,
    });

    api
      .get('/auth', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: AUTH_SUCCESS,
          payload: data,
        });
        localStorage.setItem('token', data.token);
      })
      .catch((e) => {
        console.error(e);
        localStorage.removeItem('token');
      })
      .finally(dispatch({ type: AUTH_FINALLY }));
  };
};

export const registration = (name, surname, email, password) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_START,
    });

    api
      .post('/users', {
        name,
        surname,
        username: email,
        password,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: CREATE_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        dispatch({
          type: CREATE_ERROR,
          payload: e.response.data.message,
        });
        console.error(e.response.data);
      });
  };
};

export const userLogOut = () => {
  return {
    type: LOGOUT,
  };
};

export const ChangeError = () => {
  return {
    type: CHANGE_ERROR,
  };
};

//saga
export const loginUserStart = () => {
  return { type: LOGIN_START };
};

export const loginUserSuccess = (data) => {
  return { type: LOGIN_SUCCESS, payload: data };
};

export const loginUserFailed = (error) => {
  return { type: LOGIN_ERROR, payload: error };
};

export const login = (email, password) => {
  return { type: POST_LOGIN, email, password };
};
