import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ProjectPage from "./Products/ProjectPage";
import { productListFromAPI } from "./components/ProductList"
import axios from 'axios'

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

test('fetch data from API', async () => {
  jest.mock('axios');

  const mockedAxios = axios as jest.Mocked<typeof axios>;

  jest.spyOn(axios, 'get').mockResolvedValueOnce({
    data: [
      {
        _id: "5fec88ef070bb3000fc94916",
        product_name: "kemeja hitam",
        category: {
          isDeleted: false,
          _id: "5fec8aab070bb3000fc94918",
          name: "fashion pria",
          createdAt: "2020-12-30T14:11:55.522Z",
          updatedAt: "2020-12-30T14:11:55.522Z",
          __v: 0
        },
        description: "kemeja berbahan kain import terbaik. Tersedia ukuran S, M, L, XL",
        image: "https://cardinal.co.id/wp-content/uploads/2020/03/FAKAI02364J.01A_1.jpg",
        price: 300000,
        createdAt: "2020-12-30T14:04:31.569Z",
        updatedAt: "2020-12-30T14:13:48.127Z",
      },
      {
        _id: "5fec896d070bb3000fc94917",
        product_name: "Jas putih pria",
        category: {
          isDeleted: false,
          _id: "5fec8aab070bb3000fc94918",
          name: "fashion pria",
          createdAt: "2020-12-30T14:11:55.522Z",
          updatedAt: "2020-12-30T14:11:55.522Z",
          __v: 0
        },
        description: "jas putih pria dari bahan import terbaik. Tersedia ukuran S, M, L, XL",
        image: "https://cardinal.co.id/wp-content/uploads/2020/03/FAKAI02364J.01A_1.jpg",
        price: 300000,
        createdAt: "2020-12-30T14:04:31.569Z",
        updatedAt: "2020-12-30T14:13:48.127Z",
      }
    ]
  })

  const product = await productListFromAPI()
  expect(product[0].product_name).toEqual('kemeja hitam')


})