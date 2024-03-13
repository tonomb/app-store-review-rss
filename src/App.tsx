import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { BASE_URL } from './constants/constants';

import './App.css';

type AppStoreReview = {
  title: string;
};

const initialReviewState = [
  {
    title: 'first Review',
  },
  {
    title: 'second review',
  },
];

function App() {
  const [appStoreReviews, setAppStoreReviews] = useState(initialReviewState);

  useEffect(() => {
    Axios.get(BASE_URL)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold ">Diseney App Store Reviews!</h1>
      <div>
        {appStoreReviews.map((review: AppStoreReview) => {
          return <p>{review.title}</p>;
        })}
      </div>
    </>
  );
}

export default App;
