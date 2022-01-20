import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BasicLineChart from './BasicLineChart';

describe('<BasicLineChart />', () => {
  test('it should mount', () => {
    render(<BasicLineChart           
      width= {800}
      height= {400}
      top= {10}
      bottom= {50}
      left= {50}
      right= {50} 
    />);
    
    const basicLineChart = screen.getByTestId('BasicLineChart');

    expect(basicLineChart).toBeInTheDocument();
  });
});