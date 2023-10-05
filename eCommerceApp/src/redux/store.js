import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
// const stripe = require('stripe')('sk_test_51NvHXhGH52tEgJDVhqkDEQ7bn2ifoKUKAVNS0nKkdLgbM0JWnBCyEpYhPA98RuJRM2ERHcJ5w7JNjaacHXjB3Vj100Ct6DVsh9');

// export const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import navbarSlice from "./navbarSlice";


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartSlice)

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    navbar: navbarSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)