import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import createRematchPersist from '@rematch/persist';
import createRematchLoading from '@rematch/loading';
import AsyncStorage from '@react-native-community/async-storage';

import { models, RootModel } from './models';


const persistPlugin = createRematchPersist({
  whitelist: [
    'user'
  ],
  throttle: 1000,
  version: 1,
  storage: AsyncStorage
});

const loadingPlugin = createRematchLoading({
  whitelist: [
    'user'
  ]
})

const store = init({
  models,
  plugins: [persistPlugin, loadingPlugin]
});

export default store;

export type Store = typeof store;

export type Dispatch = RematchDispatch<RootModel>

export type iRootState = RematchRootState<RootModel>