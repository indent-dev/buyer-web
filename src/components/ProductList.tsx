import { Row } from "antd";
import React, { useContext } from "react";
import { productListDemo } from "../Products/ProductListDummy";
import { CardProduct } from "./CardProduct";
import { ContextValue, ProductContext } from "./ProductContext";

interface IProductList {
    products: IProduct[]
}

export interface IProduct {
    id: number | undefined
    image: string | undefined
    price: string | undefined
    category: string | undefined
    description: string | undefined
    location: string | undefined
    // Loading to demonstrate the skeleton
    loading: boolean | undefined
}

export const ProductList = () => {

    const { filteredProductList } = useContext<ContextValue>(ProductContext)

    console.log(filteredProductList.length)
    return (
        <Row>
            { filteredProductList.length > 0 ?
                filteredProductList.map((item: IProduct) => {
                    return (
                        <CardProduct image={item.image}
                            key={item.id}
                            id={item.id}
                            price={item.price}
                            category={item.category}
                            description={item.description}
                            location={item.location}
                            loading={item.loading} />
                    )
                }) :
                productListDemo.map((item: IProduct) => {
                    console.log(item)
                    return (
                        <CardProduct image={item.image}
                            key={item.id}
                            id={item.id}
                            price={item.price}
                            category={item.category}
                            description={item.description}
                            location={item.location}
                            loading={item.loading} />

                    )
                })
            }
        </Row>
    );
}