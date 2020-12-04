import { Input } from "antd";
import React, { useContext, useState } from "react";
import { productListDemo } from "../Products/ProductListDummy";
import { ContextValue, ProductContext } from "./ProductContext";

export const SearchBar = () => {
    const { filteredProductList, getFilteredProductList } = useContext<ContextValue>(ProductContext);

    const [searchInputValue, setSearchInputValue] = useState<string>("");

    const handleSubmit =
        (value: string,
            event?: React.ChangeEvent<HTMLInputElement> |
                React.MouseEvent<HTMLElement, MouseEvent> |
                React.KeyboardEvent<HTMLInputElement> | undefined) => {
            console.log(searchInputValue)
            searchProduct(searchInputValue);
        };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setSearchInputValue(e.target.value) };

    const searchProduct = (inputValue: string) => {
        const filtered = productListDemo.filter((product) => {
            return product.description?.toLowerCase().match(inputValue.toLowerCase());
        })
        try {
            getFilteredProductList(filtered)
        } catch (error) {
            getFilteredProductList([]);
        }
    }
    return (
        <Input.Search allowClear={true}
            onChange={handleChange}
            onSearch={handleSubmit}
            value={searchInputValue}
            placeholder="Temukan produk yang Anda inginkan ... "></Input.Search>
    )
}