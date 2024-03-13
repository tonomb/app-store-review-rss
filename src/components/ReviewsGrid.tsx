import React from 'react';
import ReviewCard from './ReviewCard';
import EmptyReviews from './EmptyReviews';

export default function ReviewGrid({ appStoreReviews }: any) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {appStoreReviews.length > 0 &&
        appStoreReviews.map((review: any) => {
          return <ReviewCard review={review} />;
        })}
      {appStoreReviews.length === 0 && <EmptyReviews />}
    </div>
  );
}
