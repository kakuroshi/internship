import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		decrement: (state, action: PayloadAction<number>) => {
			state.value -= action.payload;
		},
        multiplication: (state, action: PayloadAction<number>) => {
            state.value *= action.payload;
        },
        division: (state, action: PayloadAction<number>) => {
            state.value /= action.payload;
        }
	},
});

export const {increment, decrement, multiplication, division} = counterSlice.actions;
export default counterSlice.reducer;
