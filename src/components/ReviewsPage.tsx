import React from 'react';
import ReviewsGrid from './ReviewsGrid';
import ReviewInput from './ReviewInput';

export default function ReviewPage({ appStoreReviews }: any) {
  return (
    <div className="p-16">
      <h1 className="text-3xl font-bold  text-center">
        App Store Review Rss Feed
      </h1>

      <ReviewInput />

      <ReviewsGrid appStoreReviews={appStoreReviews} />
    </div>
  );
}
