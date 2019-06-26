import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders correctly', () => {
  const tree = shallow(<Footer />).html();
  expect(tree).toMatchSnapshot();
});
