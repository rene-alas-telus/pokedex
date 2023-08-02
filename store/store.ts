import { Reducer, createStore } from "redux";

// Define the state type
interface AppState {
  userName: string;
  password: string;
  isAuthenticated: boolean;
}

// Action types
const SET_CREDENTIALS = "SET_CREDENTIALS";
const SET_AUTHENTICATED = "SET_AUTHENTICATED";
const CLEAR_CREDENTIALS = "CLEAR_CREDENTIALS";

// Action creators
export const setCredentials = (userName: string, password: string) => ({
  type: SET_CREDENTIALS,
  payload: { userName, password },
});

export const setAuthenticated = (status: boolean) => ({
  type: SET_AUTHENTICATED,
  payload: status,
});

export const clearCredentials = () => ({
  type: CLEAR_CREDENTIALS,
});

// Initial state
const initialState = {
  userName: "",
  password: "",
  isAuthenticated: false,
};

// Reducer
const rootReducer: Reducer<AppState, any> = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      return {
        ...state,
        userName: action.payload.userName,
        password: action.payload.password,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case CLEAR_CREDENTIALS:
      return {
        ...state,
        userName: "",
        password: "",
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
