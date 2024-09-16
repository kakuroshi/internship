import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice.ts";
import postsReducer from "./thunk/postsSlice.ts";
import heroesReducer from "./thunk/winRateSlice.ts"

const store = configureStore({
	reducer: {
		counter: counterReducer,
		posts: postsReducer,
		heroes: heroesReducer
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
