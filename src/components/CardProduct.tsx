import { Skeleton, Card, Col, Button, Row, Typography } from 'antd';
import React from 'react';
import { IProductAPI } from './ProductList';

export const CardProduct = (props: IProductAPI) => {
    return (
        <Col>
            <Card hoverable style={{ width: 300, marginTop: 16, marginLeft: 16 }}
                cover={<img alt={props.image} src={props.image} height={150} />}>
                <Skeleton loading={props.loading} round active>
                    <Row justify="space-between" style={{ fontWeight: "bold" }}>
                        <Col>{props.price}</Col>
                        <Button type="primary" style={{ fontWeight: "bold" }} >{props.category.name}</Button>
                    </Row>
                    <Row style={{ marginTop: "1em" }}>
                        {props.product_name}
                    </Row>
                    <Typography.Text type="secondary">
                        {/* {props?.location} */}
                    </Typography.Text>
                </Skeleton>
            </Card>
        </Col>
    );
}
