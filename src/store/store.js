import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice, counterSlice } from './slices'
// import { counterSlice } from './slices/counter/counterSlice'


export const store = configureStore({
  reducer: {
    counter:
      counterSlice.reducer,
      pokemon: pokemonSlice.reducer,
  },
})