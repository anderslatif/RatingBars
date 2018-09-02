import React from 'react';
import './styles.css';
import RatingBar from './Actual/RatingBar'

// https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220

const App = () => (
    <div>
        <RatingBar rating={8.3} highestPossibleRating={10}/>
        <RatingBar rating={5} highestPossibleRating={6} 
        color={["#ff5733", "#f2ff00", "#335eff", "#ff7733", "#f44141", "#777474"]} />
        <RatingBar rating={2.8} highestPossibleRating={5}/>
    </div>
);
export default App;