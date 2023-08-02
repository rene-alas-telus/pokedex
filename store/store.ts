import { Reducer, createStore } from "redux";
import { Pokemon } from "../src/domain/pokemon";

// Define the state type
interface AppState {
  userName: string;
  password: string;
  isAuthenticated: boolean;
  pokemons: Pokemon[];
}

// Action types
const SET_CREDENTIALS = "SET_CREDENTIALS";
const SET_AUTHENTICATED = "SET_AUTHENTICATED";
const CLEAR_CREDENTIALS = "CLEAR_CREDENTIALS";
const SET_POKEMONS = "SET_POKEMONS"; // New action type for setting pokemons

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

// New action creator for setting pokemons
export const setPokemons = (pokemons: Pokemon[]) => ({
  type: SET_POKEMONS,
  payload: pokemons,
});

// Initial state
const initialState: AppState = {
  userName: "",
  password: "",
  isAuthenticated: false,
  pokemons: [],
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
    case SET_POKEMONS: // New case to handle setting pokemons
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
