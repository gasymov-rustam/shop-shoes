import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiFavoriteOrder } from './FavoriteOrders.api';
import { reducer as cart } from './cart/Cart.slice';
import { api } from './index.api';
import { reducer as sneakers } from './sneakers/Sneakers.slice';

const reducers = combineReducers({
  cart,
  sneakers,
  [api.reducerPath]: api.reducer,
  [apiFavoriteOrder.reducerPath]: apiFavoriteOrder.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (gDM) => gDM().concat(api.middleware, apiFavoriteOrder.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
