import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Grid from 'components/Grid/Grid.js';

const renderer = new ShallowRenderer();

describe(Grid, () => {

  it('displays Grid component', () => {
    const component = renderer.render(<Grid items={[
      {
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
      },
      {
        store: {
          id: 1,
          displayName: "Brian's Pies",
          address: "366 Lonsdale Street",
          mobile: "0481233123",
          coords: {
            latitude: "-37.816981",
            longitude: "144.9584893"
          },
          rating: 8
        },
        pieOfTheDay: {
          displayName: "Beef and curry",
          quantity: 1,
          priceString: "$2.50",
        }
      }
    ]} />);
    expect(component).toMatchSnapshot();
  });
});
