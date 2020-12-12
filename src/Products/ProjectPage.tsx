import React from 'react'
import { Layout, Typography, Row, Col } from "antd";
import { ProductList } from '../components/ProductList';
import { CategoryList } from '../components/CategoryList';
import { SearchBar } from '../components/SearchBar';
import { ProductProvider } from '../components/ProductContext';

const ProjectPage = () => {
    return (
        <Layout style={{ backgroundColor: "#fff" }}>

            {/* Header */}
            <ProductProvider>
                <Layout.Header style={{ backgroundColor: "#f6f7f7" }}>
                    <Row align="middle" justify="space-between">
                        <Col>
                            <Typography.Title level={4}>Buyer Website</Typography.Title>
                        </Col>
                        <Col md={8}>
                            <SearchBar></SearchBar>
                        </Col>
                    </Row>
                </Layout.Header>

                {/* Content */}
                <Layout.Content style={{ marginLeft: "2em", marginTop: "2em", marginBottom: "4em" }}>
                    {/* Category List */}
                    <Typography.Title level={3} > Telusuri Kategori </Typography.Title>
                    <CategoryList />

                    {/* Product List */}
                    <Typography.Title level={3}>Rekomendasi Baru</Typography.Title>
                    <ProductList />

                </Layout.Content>
            </ProductProvider>
            {/* Footer */}
            <Layout.Footer style={{ textAlign: 'center', marginTop: "2em" }}>
                <Typography.Title level={4} style={{ textAlign: "center" }} >Project Page
                    <br /> Team: Yukafi & Ilham
                    </Typography.Title>

            </Layout.Footer>
        </Layout>
    );
}

export default ProjectPage
