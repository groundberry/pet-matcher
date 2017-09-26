import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Breed.css';

class Breed extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props.onClick();
  }

  render() {
    const { breed, onClick } = this.props;
    // eslint-disable-next-line
    const imgUrl = require(`./img/${breed.id}.jpg`);

    return (
      <div>
        <div
          className="Breed"
        >
          <h2
            className="Breed__name"
          >
            {breed.name}
          </h2>
          <img
            className="Breed__image"
            src={imgUrl}
            alt=""
          />
          <h3
            className="Breed__description"
          >
            {breed.description}
          </h3>
        </div>
        <button
          className="Breed__search_button"
          onClick={onClick}
        >
          Search again
        </button>
      </div>
    );
  }
}

Breed.propTypes = {
  breed: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    activity: PropTypes.string,
    budget: PropTypes.string,
    space: PropTypes.string,
    time: PropTypes.string,
    size: PropTypes.string,
    hair: PropTypes.string,
    description: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
};

Breed.defaultProps = {
  breed: {},
};

export default Breed;
