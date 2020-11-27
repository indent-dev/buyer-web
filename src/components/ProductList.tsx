import { Card, Row, Space } from "antd";
import React from "react";
import { CardProduct } from "./CardProduct";

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
    const productListDemo: IProduct[] = [
        {
            id: 1,
            image: "https://via.placeholder.com/100/1890FF",
            price: "Rp.125.000",
            category: "Pakaian",
            description: "Charger Samsung S8 S8+ Note 8 S9 S9 ...",
            location: "Lumajang, Jawa Timur",
            loading: true
        },
        {
            id: 1,
            image: "https://via.placeholder.com/100/1890FF",
            price: "Rp.125.000",
            category: "CATEGORY",
            description: "Charger Samsung S8 S8+ Note 8 S9 S9 ...",
            location: "Lumajang, Jawa Timur",
            loading: true
        },
        {
            id: 2,
            image: "https://via.placeholder.com/100/1890FF",
            price: "Rp.125.000",
            category: "CATEGORY",
            description: "Charger Samsung S8 S8+ Note 8 S9 S9 ...",
            location: "Lumajang, Jawa Timur",
            loading: true
        },
        {
            id: 3,
            image: "https://via.placeholder.com/100/1890FF",
            price: "Rp.125.000",
            category: "CATEGORY",
            description: "Charger Samsung S8 S8+ Note 8 S9 S9 ...",
            location: "Lumajang, Jawa Timur",
            loading: true
        },
        {
            id: 4,
            image: "https://via.placeholder.com/100/1890FF",
            price: "Rp.125.000",
            category: "CATEGORY",
            description: "Charger Samsung S8 S8+ Note 8 S9 S9 ...",
            location: "Lumajang, Jawa Timur",
            loading: true
        },
        {
            id: 5,
            image: "https://via.placeholder.com/100/1890FF",
            price: "Rp.125.000",
            category: "Gadget",
            description: "Charger Samsung S8 S8+ Note 8 S9 S9 ...",
            location: "Lumajang, Jawa Timur",
            loading: false
        },
        {
            id: 6,
            image: "https://via.placeholder.com/100/1890FF",
            price: "Rp.125.000",
            category: "Fashion",
            description: "Charger Samsung S8 S8+ Note 8 S9 S9 ...",
            location: "Lumajang, Jawa Timur",
            loading: false
        },
        {
            id: 7,
            image: "https://via.placeholder.com/100/1890FF",
            price: "Rp.125.000",
            category: "Olahraga",
            description: "Charger Samsung S8 S8+ Note 8 S9 S9 ...",
            location: "Lumajang, Jawa Timur",
            loading: false
        },
        {
            id: 8,
            image: "https://via.placeholder.com/100/1890FF",
            price: "Rp.125.000",
            category: "Elektronik",
            description: "Charger Samsung S8 S8+ Note 8 S9 S9 ...",
            location: "Lumajang, Jawa Timur",
            loading: false
        },
        {
            id: 9,
            image: "https://via.placeholder.com/100/1890FF",
            price: "Rp.125.000",
            category: "Otomotif",
            description: "Charger Samsung S8 S8+ Note 8 S9 S9 ...",
            location: "Lumajang, Jawa Timur",
            loading: false
        }
    ]
    return (
        <Row>
            {
                productListDemo.map((item: IProduct) => {
                    return (
                        <CardProduct image={item.image}
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