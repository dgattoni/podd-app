import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FeaturedCard from 'components/FeaturedCard/FeaturedCard.js';

const renderer = new ShallowRenderer();

describe('FeaturedCard component', () => {

  it('displays FeaturedCard component', () => {
    const component = renderer.render(
      <FeaturedCard
         key={1}
         featured={{
           store: {
             id: 1,
             displayName: "Eleven-7",
             address: "410 Collins Street",
             mobile: "0481233123",
             coords: {
               latitude: "-37.816981",
               longitude: "144.9584893"
             },
             rating: 10
           },
           pieOfTheDay: {
             displayName: "Beef",
             quantity: 5,
             priceString: "$3.00",
           }
         }} />
       );
    expect(component).toMatchSnapshot();
  });
});
