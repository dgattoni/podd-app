import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Footer from 'components/Footer/Footer.js';

const renderer = new ShallowRenderer();

describe('Footer component', () => {

  it('displays Footer component with copyrights', () => {
    const component = renderer.render(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
