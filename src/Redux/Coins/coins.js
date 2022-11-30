import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// prettier-ignore
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

export const fetchCoins = createAsyncThunk('fetch-coins', async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
});

const initialState = {
  coinsArray: [],
  loading: false,
};

const coinSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => ({
      ...state,
      loading: true,
    }));

    builder.addCase(fetchCoins.fulfilled, (state, action) => ({
      ...state,
      coinsArray: action.payload,
      loading: false,
    }));
  },
});

export default coinSlice.reducer;
