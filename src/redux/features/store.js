"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../redux/features/auth/authSlice";
import productReducer from "../../redux/features/productApi/ProductSLice";
import cartsReducer from "../../redux/features/cartsApi/CartsSlice";
import { persistStore } from "redux-persist";

import { baseApi } from "../api/baseApi";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
};
const cartsPersistConfig = {
  key: "carts",
  storage,
};
const persistAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCartsReducer = persistReducer(cartsPersistConfig, cartsReducer);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistAuthReducer,
    product: productReducer,
    carts: persistedCartsReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Create the persistor
export const persistor = persistStore(store);

// Export the store as well
export default store;
