import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

export default function ReviewInput() {
  const [appId, setAppId] = useState('595068606');
  const dispatch = useDispatch();

  const reviewsStore = useSelector((state: RootState) => state.reviews);

  const appStoreReviews = reviewsStore.reviews;
  const reviewsError = reviewsStore.error;
  const reviewsErrorMessage = reviewsStore.errorMessage;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch.reviews.getReviews(appId);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppId(e.target.value);
  };

  return (
    <>
      <form className="p-4 text-center" onSubmit={handleSubmit}>
        <input
          type="text"
          value={appId}
          onChange={handleChange}
          className="border border-solid border-slate-950 px-2 py-1.5 rounded-md my-4"
        />
        <button className="ml-2 bg-[#0070C9] px-2 py-1.5 rounded-md text-white ">
          Check Reviews
        </button>
      </form>

      {appStoreReviews.length === 0 && !reviewsError && (
        <p className="text-center text-s">
          Enter a app store id to get the latest reviews
        </p>
      )}

      {reviewsError && (
        <p className="text-center text-s text-red-500">{reviewsErrorMessage}</p>
      )}
    </>
  );
}
