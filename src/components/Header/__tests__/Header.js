import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from 'components/Header/Header.js';

const renderer = new ShallowRenderer();

describe('Header component', () => {

  it('displays Header component', () => {
    const component = renderer.render(<Header />);
    expect(component).toMatchSnapshot();
  });
});
