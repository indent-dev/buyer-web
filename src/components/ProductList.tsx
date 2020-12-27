import { Row } from "antd";
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
    // Loading to demonstrate the skeleton
    loading: boolean | undefined
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
    loading: boolean | undefined

}

export const ProductList = () => {

    const { filteredProductList } = useContext<ContextValue>(ProductContext)
    const [data, setData] = useState<IProductAPI[]>();

    const productListFromAPI = async () => {
        await Axios.get("https://product-service-indent.herokuapp.com/product")
            .then(res => res.data)
            .then(data => setData(data))
    }

    useEffect(() => {
        productListFromAPI()
    }, [])

    return (
        <Row>
            { filteredProductList.length > 0 ?
                filteredProductList?.map((item: IProductAPI) => {
                    return (
                        <CardProduct image={item.image}
                            key={item._id}
                            _id={item._id}
                            price={item.price}
                            category={item.category}
                            location={"Lumajang,Jawa Timur"}
                            product_name={item.product_name}
                            loading={item.loading} />
                    )
                }) :
                data?.map((item: IProductAPI) => {
                    return (
                        <Link to={`/detail/${item._id}`} key={item._id}>
                            <CardProduct image={item.image}
                                key={item._id}
                                _id={item._id}
                                price={item.price}
                                category={item.category}
                                product_name={item.product_name}
                                location={"Lumajang,Jawa Timur"}
                                loading={item.loading} />
                        </Link>
                    )
                })
            }
        </Row>
    );
}