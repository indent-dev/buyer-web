import React, { createContext, useState } from 'react';
import { IProduct } from './ProductList';

interface IProps {
    children: React.ReactNode,
}

export interface ContextValue {
    filteredProductList: IProduct[]
    getFilteredProductList: (newProduct: IProduct[]) => void
}

export const ProductContext = createContext<ContextValue>({ filteredProductList: [], getFilteredProductList: () => { } });

export const ProductProvider = (props: IProps) => {

    const [filteredProductList, setFilteredProductList] = useState<IProduct[]>([])

    const getFilteredProductList = (products: IProduct[]) => setFilteredProductList(products);

    const contextValue: ContextValue = { filteredProductList, getFilteredProductList }


    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    );
};
