import { Card, Col, Button, Row, Typography } from 'antd';
import React from 'react';
import { IProductAPI } from './ProductList';

export const CardProduct = (props: IProductAPI) => {
    return (
        <Card hoverable>
            <img alt={props.image} src={props.image} width="100%" height={250} />
            <Row justify="space-between" style={{ fontWeight: "bold" }}>
                <Col>{props.price}</Col>
                <Button type="primary" style={{ fontWeight: "bold" }} >{props.category.name}</Button>
            </Row>
            <Row style={{ marginTop: "1em" }}>
                {props.product_name}
            </Row>
            <Typography.Text type="secondary">
                {props?.location}
            </Typography.Text>
        </Card>
    );
}
