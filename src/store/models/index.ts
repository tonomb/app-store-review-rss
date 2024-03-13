import type { Models } from '@rematch/core';
import { loading } from './loading.model';
import { reviews } from './reviews.model';

export interface RootModel extends Models<RootModel> {
  loading: typeof loading;
  reviews: typeof reviews;
}
export const models: RootModel = {
  loading,
  reviews,
};
