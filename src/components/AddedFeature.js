import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions';
import { subtractPrice } from '../actions';
const AddedFeature = props => {
  const removeItem = () => {
    props.removeFeature(props.feature);
    props.subtractPrice(props.feature.price);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeItem}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature, subtractPrice})(AddedFeature);