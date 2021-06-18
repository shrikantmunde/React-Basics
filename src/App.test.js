import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it('renders with a title', function() {
  const component = renderer.create(<App title="My Title" />);
  expect(component).toMatchSnapshot();
})

it('renders with a border', function() {
  const component = renderer.create(<App title1="My Title" border />);
  expect(component).toMatchSnapshot();
})
