import { Col, Container, Row, Nav, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import storeItems from "../json/presentation.json"
import { formatCurrency } from "../utilities/formatCurrency"

export function Home() {
  return (
    <Container>
      <Nav className="me-auto" >
        <Row md={2} xs={1} lg={3} className="gx-3">
          {storeItems.map(item => (
            <Link className="links" to="/Product" state={{ updateId: item.id, updateImg: item.imgUrl, updateColor: item.color }} key={item.id}>
              <Col key={item.id} >
                <Card className="h-100 mt-3">
                  <Card.Img
                    className="mt-2"
                    variant="top"
                    src={item.imgUrl}
                    height="300px"
                    style={{ objectFit: "scale-down" }}
                  />
                  <Card.Body className="d-flex flex-column" style={{ height: "160px" }}>
                    <Card.Title className="d-flex justify-content-between align-items-baseline">
                      <span className="fs-2">{item.name}</span>
                      <span className="ms-2 text-muted">{formatCurrency(item.price)}</span>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          ))}
        </Row>
      </Nav >
    </Container >
  )
}
