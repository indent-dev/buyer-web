import React from 'react'
import { Layout, Typography, Row, Col, Button, Image, Breadcrumb } from "antd";
import { Link, useParams } from "react-router-dom"
import Axios from "axios"
import { IProductAPI } from "../components/ProductList"
import "../App.css"

interface IDetailProductType {
    id: string
}

const ProjectDetailPage = () => {
    const [data, setData] = React.useState<IProductAPI>();
    const { id } = useParams<IDetailProductType>();

    React.useEffect(() => {
        const fetchDetailProduct = async () => {
            try {
                const result = await Axios.put(`https://product-service-indent.herokuapp.com/product/${id}`)
                setData(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDetailProduct();
    }, [id])

    return (
        <Layout style={{ backgroundColor: "#fff" }}>
            <Layout.Header style={{ backgroundColor: "#f6f7f7" }}>
                <Row style={{ marginTop: 15 }}>
                    <Col>
                        <Typography.Title level={4}>Buyer Website</Typography.Title>
                    </Col>
                </Row>
            </Layout.Header>
            <Layout.Content style={{ marginLeft: "3.5em", marginBottom: "4em" }}>
                <Breadcrumb style={{ margin: '20px 0' }}>
                    <Breadcrumb.Item>PRODUK</Breadcrumb.Item>
                    <Breadcrumb.Item >{data?.product_name}</Breadcrumb.Item>
                </Breadcrumb>
                <Button type="primary"><Link to="/">KEMBALI KE PRODUK</Link></Button>
                <Row align="middle">
                    <Col style={{ marginTop: 30, marginRight: 40 }} >
                        <Image
                            style={{ width: 700, height: 500 }}
                            src={data?.image}
                            preview
                        />
                    </Col>
                    <Col style={{ marginTop: 30, width: '35%' }}>
                        <Typography.Title level={2} >{data?.product_name}</Typography.Title>
                        <Typography.Title level={4} type="secondary">Rp. {data?.price}</Typography.Title>
                        <br />
                        <div style={{ width: 500, height: 250 }}>
                            <Typography.Text style={{ lineHeight: 3 }}>
                                Charger ini support output 9V fast charging, jadi
                                sangat cepat untuk mencharging Gadget yang
                                dilengkapi fitur fast charging juga seperti Xiaomi mi5,
                                Samsung Galaxy Note 7, A5 2017, A7 2017,dll. Jika
                                Charger ini digunakan untuk Gadget yang tidak
                                memiliki fitur Fast Charging, maka charger ini
                                beroperasi secara normal seperti charger 2A pada
                                umumnya.
                                </Typography.Text>
                        </div>
                        <Button type="primary" style={{ marginTop: 20 }}>CHAT DENGAN PENJUAL</Button>
                    </Col>
                </Row>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center', marginTop: "2em" }}>Copyright © 2021 Indent Developer. All Rights Reserved
        </Layout.Footer>
        </Layout>
    )
}

export default ProjectDetailPage
