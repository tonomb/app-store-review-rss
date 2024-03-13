import { createModel } from '@rematch/core';

import { RootModel } from '.';

export const loading = createModel<RootModel>()({
  state: {
    isLoading: false,
  },
  reducers: {
    storeLoadingStatus(state, payload) {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
  effects: dispatch => ({
    setLoadingStatus(payload, state) {
      dispatch.loading.storeLoadingStatus(payload);
    },
  }),
});
