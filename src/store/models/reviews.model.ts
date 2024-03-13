import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { BASE_URL } from '../../constants/constants';

import axios from 'axios';

interface Author {
  uri: { label: string };
  name: { label: string };
}

interface Review {
  author: Author;
  updated: { label: string };
  'im:rating': { label: string };
  'im:version': { label: string };
  id: { label: string };
  title: { label: string };
  content: { label: string; attributes: { type: string } };
  link: { attributes: { rel: string; href: string } };
  'im:voteSum': { label: string };
  'im:contentType': { attributes: { term: string; label: string } };
  'im:voteCount': { label: string };
}

interface ReviewsState {
  reviews: Review[];
}

export const reviews = createModel<RootModel>()({
  state: {
    reviews: [] as Review[],
  },
  reducers: {
    storeReviewsState(state: ReviewsState, payload: Review[]) {
      return {
        ...state,
        reviews: payload,
      };
    },
  },
  effects: dispatch => ({
    getReviews(payload) {
      axios
        .get(`${BASE_URL}/rss/${payload}`)
        .then(res => {
          dispatch.reviews.storeReviewsState(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  }),
});
