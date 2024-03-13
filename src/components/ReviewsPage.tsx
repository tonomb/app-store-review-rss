import React from 'react';
import ReviewsGrid from './ReviewsGrid';

export default function ReviewPage({ appStoreReviews }: any) {
  return (
    <div className="p-16">
      <h1 className="text-3xl font-bold  text-center mb-8">
        Tab - The simple bill splitter App Store Reviews
      </h1>

      <ReviewsGrid appStoreReviews={appStoreReviews} />
    </div>
  );
}
