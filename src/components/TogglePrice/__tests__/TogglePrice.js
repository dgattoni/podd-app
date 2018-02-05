import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TogglePrice from 'components/TogglePrice/TogglePrice.js';

const renderer = new ShallowRenderer();

describe(TogglePrice, () => {

  const onToggleSort = jest.fn();

  describe('When isAccendingSort is true', () => {
    it('Toggle should render Price sorted asc', () => {
      const result = renderer.render(
        <TogglePrice
          onToggleSort={onToggleSort}
          isAccendingSort={true}
        />);
        expect(result.props.children).toEqual(
          [
            'Price sorted: ',
            'asc'
          ]
        );
    });
  });

  describe('When isAccendingSort is false', () => {
    it('Toggle should render Price sorted desc', () => {
      const result = renderer.render(
        <TogglePrice
          onToggleSort={onToggleSort}
          isAccendingSort={false}
        />);
        expect(result.props.children).toEqual(
          [
            'Price sorted: ',
            'desc'
          ]
        );
    });
  });
});
