import React from 'react';
import './styles.css';
import RatingBar from './Actual/RatingBar'

const App = () => (
    <div>
        <RatingBar rating={3} highestPossibleRating={10}/>
    </div>
);
export default App;