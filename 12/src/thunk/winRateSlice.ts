import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";

interface Hero {
	id: number;
	localized_name: string;
	attack_type: string;
	primary_attr: string;
	base_str: number;
	str_gain: number;
	base_health: number;
	base_agi: number;
	agi_gain: number;
	move_speed: number;
	base_int: number;
	int_gain: number;
	base_mana: number;
	attack_rate: number;
	base_attack_min: number;
	base_attack_max: number;
	attack_range: number;
	projectile_speed: number;
	base_armor: number;
	pro_win: number;
	pro_pick: number;
}

interface HeroesState {
	items: Hero[];
	loading: boolean;
	error: string | null;
}

const initialState: HeroesState = {
	items: [],
	loading: false,
	error: null,
};

export const fetchHeroes = createAsyncThunk<Hero[]>("heroes/fetchHeroes", async () => {
	const response = await fetch("https://api.opendota.com/api/heroStats");
	if (!response.ok) {
		throw new Error("Network error!");
	}
	const data: Hero[] = await response.json();
	return data;
});

const heroesSlice = createSlice({
	name: "heroes",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchHeroes.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchHeroes.fulfilled, (state, action: PayloadAction<Hero[]>) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchHeroes.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Failed to fetch heroes wr";
			});
	},
});

export default heroesSlice.reducer;
