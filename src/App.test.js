import { render, screen } from '@testing-library/react';

import {add, schoolPopulation} from './App';

test('add', () => {
  const value = add(1,2);
  expect(value).toBe(3)
  expect(add(-1,-3)).toBe(-4)
})

test('schoolPopulation', () => {
  expect(schoolPopulation(10,100)).toBe("There are 110 people at the school")
})


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
