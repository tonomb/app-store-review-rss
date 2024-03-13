import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { BASE_URL } from './constants/constants';
import ReviewsPage from './components/ReviewsPage';

import './App.css';

const initialReviewState: any = [];

// Review Content,author, score, time

function App() {
  const [appStoreReviews, setAppStoreReviews] = useState(initialReviewState);

  useEffect(() => {
    Axios.get(`${BASE_URL}/rss`)
      .then(res => {
        console.log(res.data);
        setAppStoreReviews(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ReviewsPage appStoreReviews={appStoreReviews} />
    </>
  );
}

export default App;
