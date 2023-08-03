import { Reducer, createStore } from "redux";
import { Pokemon } from "../src/domain/pokemon";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

// Add Redux persistence configuration
const persistConfig = {
  key: "root", // Key used to store the data in AsyncStorage
  storage: AsyncStorage, // Use AsyncStorage for local storage
  whitelist: ["userName", "password", "isAuthenticated"], // List of state fields to persist
};

const persistedReducer = persistReducer<AppState, any>(
  persistConfig,
  rootReducer
);

// Create the Redux store with persistence
const store = createStore(persistedReducer);

// Create a persistor object to allow manual control over rehydration
export const persistor = persistStore(store);

export default store;
