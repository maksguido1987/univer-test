import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newsReducer from './reducers';

const rootReducer = combineReducers({
  newsReducer,
});

export const newsStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof newsStore>;
export type AppDispatch = AppStore['dispatch'];
