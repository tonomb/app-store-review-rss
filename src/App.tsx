import React from 'react';

import ReviewsPage from './components/ReviewsPage';

// State Management
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';

import './App.css';

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <ReviewsPage />
      </ReduxProvider>
    </>
  );
}

export default App;
