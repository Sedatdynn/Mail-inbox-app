import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000';
const initialState = {
    messages: [],
    isLoading: false,
}


export const getAllMessages = createAsyncThunk(
  'messages/getAll',
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/messages`);
      return response.data.messages;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    changeLoading: (state) => {
      state.isLoading = !state.isLoading
  }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMessages.fulfilled, (state, action) => { 
        state.messages = action.payload;
    })
}
})

export const { changeLoading } = messagesSlice.actions

export default messagesSlice.reducer