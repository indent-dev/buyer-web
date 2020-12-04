import React, { createContext, useState } from 'react';
import { IProductAPI } from './ProductList';

interface IProps {
    children: React.ReactNode,
}

export interface ContextValue {
    filteredProductList: IProductAPI[]
    getFilteredProductList: (newProduct: IProductAPI[]) => void
}

export const ProductContext = createContext<ContextValue>({ filteredProductList: [], getFilteredProductList: () => { } });

export const ProductProvider = (props: IProps) => {

    const [filteredProductList, setFilteredProductList] = useState<IProductAPI[]>([])

    const getFilteredProductList = (products: IProductAPI[]) => setFilteredProductList(products);

    const contextValue: ContextValue = { filteredProductList, getFilteredProductList }


    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    );
};
