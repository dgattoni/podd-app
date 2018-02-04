import React from 'react';

const FeaturedCard = ({ featured }) => {
  const { store, pieOfTheDay } = featured;
  return(
   <div className="FeaturedCard">
     <div className="Store">
       {`
         ${store.displayName}
         ${store.address}
         ${store.rating}
         ${store.mobile}
       `}
     </div>
     <div className="FeaturedPies">
       {pieOfTheDay.length > 0 ? pieOfTheDay.map((pie, index) =>
         <li key={index}>{`Name: ${pie.displayName}, Price: ${pie.priceString}, Qty: ${pie.quantity}`}</li>) :
         <li>No Featured Pies.</li>
       }
     </div>
   </div>
  );
}

export default FeaturedCard;
