import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';

import asyncLocalStorage from 'src/store/common/storage';
import authReducer from 'src/store/features/auth/authSlice';
import roleReducer from 'src/store/features/role/roleSlice';
import {
  authApi,
  branchApi,
  categoryApi,
  classApi,
  clubManagementApi,
  disciplineApi,
  divisionApi,
  matchApi,
  matchScoreApi,
  provinceApi,
  rangeApi,
  sponsorApi,
  targetApi
} from 'src/store/services';

const persistConfig = {
  key: 'auth',
  storage: asyncLocalStorage,
  whitelist: ['user', 'token']
};

const rolePersistConfig = {
  key: 'role',
  storage: asyncLocalStorage,
  whitelist: ['role']
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedRoleReducer = persistReducer(rolePersistConfig, roleReducer);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authState: persistedAuthReducer,
    roleState: persistedRoleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(
      authApi.middleware,
    )
});

export const persistedStore = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
