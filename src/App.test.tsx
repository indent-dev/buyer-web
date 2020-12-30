import React from 'react';
import { cleanup, render } from '@testing-library/react';
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

test('Renders project page', () => {
  const { getByText } = render(<ProjectPage />);
  const linkElement = getByText("Buyer Website");
  expect(linkElement).toBeInTheDocument();
});

test('Shows loading when retrieving the data', () => {
  const { getByText } = render(<ProjectPage />);
  const linkElement = getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
  cleanup();
})