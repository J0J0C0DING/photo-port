/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import Modal from '..';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const currentPhoto = {
  name: 'Park Bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1,
};

const mockToggalModal = jest.fn();

afterEach(cleanup);

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal onClose={mockToggalModal} currentPhoto={currentPhoto} />);

    fireEvent.click(getByText('Close this modal'));

    expect(mockToggalModal).toHaveBeenCalledTimes(1);
  });
});
