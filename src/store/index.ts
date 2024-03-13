import {
  init,
  type RematchDispatch,
  type RematchRootState,
} from '@rematch/core';
import { models, type RootModel } from './models';
import persistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = init({
  models,
  plugins: [persistPlugin<RootModel, typeof models>(persistConfig)],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
