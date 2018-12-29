import React from 'react';
import renderer from 'react-test-renderer';
import Paper from '../Paper';

describe('Paper', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(
        <Paper>
          <div>paper</div>
        </Paper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
