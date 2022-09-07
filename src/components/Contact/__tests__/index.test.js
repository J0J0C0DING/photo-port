/* eslint-disable testing-library/prefer-screen-queries */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component renders', () => {
  it('renders', () => {
    render(<Contact />);
  });

  it('renders snapshot', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it('renders contact tag', () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
});

it('renders submit button', () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId('button')).toHaveTextContent('Submit');
});
