import React from 'react';
import { render } from '@testing-library/react';
import ProjectPage from "./Products/ProjectPage";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test('renders project page', () => {
  const { getByText } = render(<ProjectPage />);
  const linkElement = getByText("Buyer Website");
  expect(linkElement).toBeInTheDocument();
});
