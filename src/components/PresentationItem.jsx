/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

export function PresentationItem({ name, price, imgUrl }) {
    return (
        <Card className="h-100 mt-3">
            <Card.Img
                className="mt-2"
                variant="top"
                src={imgUrl}
                height="300px"
                style={{ objectFit: "scale-down" }}
            />
            <Card.Body className="d-flex flex-column" style={{ height: "144px" }}>
                <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}
