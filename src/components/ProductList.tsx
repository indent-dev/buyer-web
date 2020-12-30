import { List, Spin } from "antd";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { CardProduct } from "./CardProduct";
import { ContextValue, ProductContext } from "./ProductContext";

interface IProductList {
    products: IProductAPI[]
}

export interface IProduct {
    id: string | undefined
    image: string | undefined
    price: string | undefined
    category: string | undefined
    description: string | undefined
    location: string | undefined
}

export interface IProductAPI {
    _id: string
    product_name: string
    price: string,
    category: {
        _id: string
        name: string
    },
    image: string | undefined
    location: string | undefined
}

export const productListFromAPI = async () => {
    const { data } = await Axios.get("https://product-service-indent.herokuapp.com/product")
    return data
}

export const ProductList = () => {

    const { filteredProductList } = useContext<ContextValue>(ProductContext)
    const [data, setData] = useState<IProductAPI[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        productListFromAPI().then(data => {
            setData(data)
            setLoading(false);
        })
    }, [])

    return (
        !loading ?
            <div id="listProduct">
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        column: 4
                    }}
                    dataSource={filteredProductList.length > 0 ? filteredProductList : data}
                    renderItem={(item: IProductAPI) => (
                        <List.Item>
                            <Link to={`/detail/${item._id}`} key={item._id}>
                                <CardProduct image={item.image}
                                    key={item._id}
                                    _id={item._id}
                                    price={item.price}
                                    category={item.category}
                                    product_name={item.product_name}
                                    location={"Lumajang, Jawa Timur"}
                                />
                            </Link>
                        </List.Item>
                    )}
                />
            </div>
            :
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "65vh" }}>
                <Spin size="large" tip="Loading products..." />
            </div>
    );
}