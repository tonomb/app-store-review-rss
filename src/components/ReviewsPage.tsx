import React from 'react';
import ReviewsGrid from './ReviewsGrid';
import ReviewForm from './ReviewForm';

export default function ReviewPage() {
  return (
    <div className="p-16">
      <h1 className="text-3xl font-bold  text-center">
        App Store Review Rss Feed
      </h1>
      <ReviewForm />
      <ReviewsGrid />
    </div>
  );
}
