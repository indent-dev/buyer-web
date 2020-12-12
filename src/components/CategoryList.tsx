import { Row } from "antd"
import React from "react"
import { CardCategory } from "./CardCategory"

// export interface ICategory {
//     name: string | undefined
// }

export const CategoryList = () => {
    const categoryList: string[] = ["Gadget", "Fashion", "Olahraga", "Elektronik", "Otomotif"]
    return (
        <Row>
            {categoryList.map((item) => {
                return (
                    <CardCategory categoryName={item} />
                )
            })}
        </Row>
    )
}