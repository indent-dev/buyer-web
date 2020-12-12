import React from 'react'
import { Layout, Typography, Row, Col } from "antd";
const ProjectPage = () => {
    return (
        <Layout style={{ backgroundColor: "#fff" }}>
            <Layout.Header style={{ backgroundColor: "#f6f7f7" }}>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Typography.Title level={4}>Buyer Website</Typography.Title>
                    </Col>
                    <Col>
                        <Typography.Text>Input di sini</Typography.Text>
                    </Col>
                </Row>
            </Layout.Header>
            <Layout.Content style={{ height: "90vh" }}>
                <Typography.Title level={4} style={{ textAlign: "center" }} >Project Page</Typography.Title>
                <Typography.Title level={4} style={{ textAlign: "center" }} >Teamss: Yukafi & Ilham</Typography.Title>
                <Typography.Text style={{ textAlign: "center" }}>Test Project</Typography.Text>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>Footer</Layout.Footer>
        </Layout>
    );
}

export default ProjectPage
