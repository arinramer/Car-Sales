  

  export const removeFeature = item => {
    return { type: 'REMOVE_FEATURE', payload: item}
  };

  export const subtractPrice = price => {
    return { type: 'SUBTRACT_PRICE', payload: price}
  }

  export const buyItem = item => {
    return { type: 'ADD_FEATURE', payload: item}
  };

  export const updatePrice = price => {
    return { type: 'UPDATE_PRICE', payload: price}
  }