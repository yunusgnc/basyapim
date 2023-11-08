import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataFromRemote = createAsyncThunk(
  "data/fetchData",
  async () => {
    const response = await axios.get(
      process.env.REACT_APP_BASE_BACKEND + `v1/content-management/list-title-2/`
    );
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataArray: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromRemote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDataFromRemote.fulfilled, (state, action) => {
        state.loading = false;
        state.dataArray = action.payload;
      })
      .addCase(getDataFromRemote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
