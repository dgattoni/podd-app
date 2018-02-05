import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Paginator from 'components/Paginator/Paginator.js';

const renderer = new ShallowRenderer();

describe(Paginator, () => {

  const onPrevButtonClick = jest.fn();
  const onNextButtonClick = jest.fn();

  it('Paginator should render with two buttons components', () => {
    const result = renderer.render(
      <Paginator
        onPrevButtonClick={onPrevButtonClick}
        onNextButtonClick={onNextButtonClick}
      />);
      expect(result.props.children).toEqual(
        [
          <button className="Btn" onClick={onPrevButtonClick}>prev page</button>,
          <button className="Btn" onClick={onNextButtonClick}>next page</button>
        ]
      );
  });
});
