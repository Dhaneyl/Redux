import { configureStore,} from '@reduxjs/toolkit'
import { todosApi } from './apis/todosApi'
import { pokemonSlice, counterSlice } from './slices'
// import { counterSlice } from './slices/counter/counterSlice'


export const store = configureStore({
  reducer: {
    counter:
      counterSlice.reducer,
      pokemon: pokemonSlice.reducer,

      [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware()
  .concat(todosApi.middleware)
})