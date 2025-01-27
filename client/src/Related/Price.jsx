import React from 'react';

const Price = (props) => {
  if (props.sale) {
    return (
      <div className='card-price'>
        <span className='sale'>{`$${props.salePrice} `}</span>
        <span className='reg-price'>{` $${props.regPrice}`}</span>
      </div>
    )
  } else {
    return (
      <div className='card-price'>
        <span>{`$${props.regPrice}`}</span>
      </div>
    )
  }
}
export default Price;