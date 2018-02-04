import React from 'react';

// const Card = ({ store, pie }) => (
//   <div className="Card">
//   {`
//     ${pie.displayName}
//     ${pie.priceString}
//     ${pie.quantity}
//     ${store.displayName}
//     ${store.address}
//     ${store.rating}
//     ${store.mobile}
//   `}
//   </div>
// );
const Card = ({ id, displayName, price }) => (
  <div className="Card">
  {`
    ${id} -
    ${displayName} -
    ${price}
  `}
  </div>
);

export default Card;
