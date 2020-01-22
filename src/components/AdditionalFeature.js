import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions';
import { updatePrice } from '../actions';

const AdditionalFeature = props => {
  const addItem = () => {
    props.buyItem(props.feature);
    props.updatePrice(props.feature.price);
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {buyItem, updatePrice})(AdditionalFeature);
