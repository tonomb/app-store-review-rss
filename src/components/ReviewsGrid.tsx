import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/';
import ReviewCard from './ReviewCard';
import EmptyReviews from './EmptyReviews';

export default function ReviewGrid() {
  const appStoreReviews = useSelector(
    (state: RootState) => state.reviews.reviews,
  );

  return (
    <div className="grid grid-cols-4 gap-4">
      {appStoreReviews.map((review: any) => {
        return <ReviewCard review={review} key={review.id.label} />;
      })}
    </div>
  );
}
