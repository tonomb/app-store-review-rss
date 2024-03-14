import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/';
import ReviewCard from './ReviewCard';
import EmptyReviews from './EmptyReviews';

export default function ReviewGrid() {
  const reviewsStore = useSelector((state: RootState) => state.reviews);

  const appStoreReviews = reviewsStore.reviews;
  const reviewsError = reviewsStore.error;

  return reviewsError ? null : (
    <div className="grid grid-cols-4 gap-4">
      {appStoreReviews.map((review: any) => (
        <ReviewCard review={review} key={review.id.label} />
      ))}
    </div>
  );
}
