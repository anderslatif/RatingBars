import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './RatingBar.css';

export default class RatingBar extends Component {
  static contextTypes = {
    httpClient: PropTypes.object.isRequired
  };

  static propTypes = {
    rating: PropTypes.number.isRequired,
    highestPossibleRating: PropTypes.number.isRequired,
    color: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  createRatingBars() {
    let ratingBars = [];
    const rating = this.props.rating;
    const barHeight = this.props.height ? Number(this.props.height) : 16;
    const barWidth = this.props.width ? Number(this.props.width) : 4;

    for (let i = 0; i < this.props.highestPossibleRating; i++) {
      const key = 'rating' + i;

      if (this.props.color) {
        let color;
        if (Array.isArray(this.props.color) && this.props.color.length >= i) {
          color = this.props.color[i];
        } else if (typeof this.props.color === 'string') {
          color = this.props.color;
        } else {
          color = '#707070';
        }
        ratingBars.push(
          <div key={key} className={'rating-bar full-bar'} style={{ backgroundColor: color }} />
        );
      } else if (rating >= i + 1) {
        // add full green square
        ratingBars.push(
          <div
            key={key}
            className={'rating-bar full-bar'}
            style={{ backgroundColor: '#00E676', height: barHeight + 'px', width: barWidth + 'px' }}
          />
        );
      } else {
        if (i + 1 - rating > 1) {
          ratingBars.push(
            <div
              key={key}
              className={'rating-bar full-bar'}
              style={{ backgroundColor: '#fff', height: barHeight + 'px', width: barWidth + 'px' }}
            />
          );
        } else {
          const remain = (i + 1 - rating) % 1;
          const topHeight = remain * barHeight;
          const bottomHeight = (1 - remain) * barHeight;

          ratingBars.push(
            <div
              key={key + 'top'}
              className={'rating-bar semi-bar-top'}
              style={{ backgroundColor: '#fff', height: topHeight + 'px', width: barWidth + 'px' }}
            />
          );
          ratingBars.push(
            <div
              key={key + 'bottom'}
              className={'rating-bar semi-bar-bottom'}
              style={{
                backgroundColor: '#00E676',
                height: bottomHeight + 'px',
                width: barWidth + 'px'
              }}
            />
          );
        }
      }
    }

    return ratingBars;
  }

  render() {
    const { t } = this.props;

    const ratingBarsHTML = this.createRatingBars();

    return (
      <div className="RatingBar">
        {ratingBarsHTML}
        <p>{this.props.rating}</p>
      </div>
    );
  }
}
