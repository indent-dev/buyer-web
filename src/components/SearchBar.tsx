import { Input } from "antd";
import Axios from "axios";
import React, { useContext, useState } from "react";
import { ContextValue, ProductContext } from "./ProductContext";
import { IProductAPI } from "./ProductList";

export const SearchBar = () => {
    const { filteredProductList, getFilteredProductList } = useContext<ContextValue>(ProductContext);

    const [searchInputValue, setSearchInputValue] = useState<string>("");
    const [data, setData] = useState<IProductAPI[]>([]);

    const productListFromAPI = async () => {
        let data = await Axios.get("https://product-service-indent.herokuapp.com/product")
            .then(res => res.data)
            .then(data => setData(data))
    }

    const handleSubmit = (value: string,
        event?: React.ChangeEvent<HTMLInputElement> |
            React.MouseEvent<HTMLElement, MouseEvent> |
            React.KeyboardEvent<HTMLInputElement> | undefined) => {
        console.log(searchInputValue)
        searchProduct(searchInputValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setSearchInputValue(e.target.value) };

    const searchProduct = async (inputValue: string) => {

        const filtered = data?.filter((product: IProductAPI) => {
            return product.product_name?.toLowerCase().match(inputValue.toLowerCase());
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