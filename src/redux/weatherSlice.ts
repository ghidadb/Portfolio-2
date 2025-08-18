import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

type State = { history: string[] }

const initialState: State = {
  history: JSON.parse(localStorage.getItem('weatherHistory') || '[]')
}

const slice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addHistory(state, action: PayloadAction<string>) {
      const city = action.payload.trim()
      if (!city) return
     
      state.history = [city, ...state.history.filter(c => c.toLowerCase() !== city.toLowerCase())].slice(0, 6)
      localStorage.setItem('weatherHistory', JSON.stringify(state.history))
    },
    clearHistory(state) {
      state.history = []
      localStorage.removeItem('weatherHistory')
    }
  }
})

export const { addHistory, clearHistory } = slice.actions
export const selectHistory = (s: RootState) => s.weather.history
export default slice.reducer
