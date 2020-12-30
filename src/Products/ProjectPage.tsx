import React from 'react'
import { Layout, Typography, Row, Col } from "antd";
import { ProductList } from '../components/ProductList';
import { SearchBar } from '../components/SearchBar';
import { ProductProvider } from '../components/ProductContext';

const ProjectPage = () => {
    return (
        <Layout style={{ backgroundColor: "#fff", overflow: "hidden" }}>
            <ProductProvider>
                <Layout.Header style={{ backgroundColor: "#f6f7f7" }}>
                    <Row justify="space-between">
                        <Col style={{ marginTop: 15 }}>
                            <Typography.Title level={4}>Buyer Website</Typography.Title>
                        </Col>
                        <Col md={8}>
                            <SearchBar></SearchBar>
                        </Col>
                    </Row>
                </Layout.Header>
                <Layout.Content style={{ marginLeft: "3.5em", marginTop: "2em", marginBottom: "4em" }}>
                    <Typography.Title level={3}>Rekomendasi Baru</Typography.Title>
                    <ProductList />
                </Layout.Content>
            </ProductProvider>
            <Layout.Footer style={{ textAlign: 'center', marginTop: "2em" }}>Copyright © 2021 Indent Developer. All Rights Reserved
            </Layout.Footer>
        </Layout>
    );
}

export default ProjectPage
