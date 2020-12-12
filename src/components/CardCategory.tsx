import { Card, Col } from "antd";
import React from "react";

export const CardCategory = (props: any) => {
    return (
        <Col>
            <Card hoverable style={{ width: 300, backgroundColor: "#1890FF", marginTop: 16, marginLeft: 16 }}>
                <div style={{ color: "white", fontWeight: "bold", textAlign: "center" }} >
                    {props.categoryName}
                </div>
            </Card>
        </Col>
    )
}