import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  date: '',
}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      return action.payload
    },
    clearError: () => {
      return initialState
    },
  },
})

export const { setError, clearError } = errorSlice.actions
export const selectErrorMessage = (state) => state.error
export default errorSlice.reducer
