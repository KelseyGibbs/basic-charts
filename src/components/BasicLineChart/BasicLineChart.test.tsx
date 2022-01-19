import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BasicLineChart from './BasicLineChart';

describe('<BasicLineChart />', () => {
  test('it should mount', () => {
    render(<BasicLineChart />);
    
    const basicLineChart = screen.getByTestId('BasicLineChart');

    expect(basicLineChart).toBeInTheDocument();
  });
});