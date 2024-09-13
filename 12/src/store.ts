import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice.ts';
import postsReducer from './reducers/postsSlice.ts'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
