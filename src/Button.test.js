import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

it('renders a button', function() {
  const component = renderer.create(<Button onClick="My Title" />);
  expect(component).toMatchSnapshot();
})