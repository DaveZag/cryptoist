import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDetails = createAsyncThunk('fetch-details', async (id) => {
  const resp = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await resp.json();
  return data;
});

const detailSlice = createSlice({
  name: 'Details',
  initialState: {
    coinDetails: [],
    loading: true,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.fulfilled, (state, action) => ({
      ...state,
      coinDetails: action.payload,
      loading: false,
    }));
  },
});

export default detailSlice.reducer;
