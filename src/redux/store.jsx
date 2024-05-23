import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from '../redux/messagesSlice'

export const store = configureStore({
    reducer: {
        messages: messagesReducer,
  },
})