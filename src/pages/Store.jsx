import { Link } from "react-router-dom"
import { Container, Nav, Card, Col, Row } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import storeItems from "../json/presentation.json"

export function Store() {
  return (
    <Container>
      <Nav className="me-auto" >
        <Row md={2} xs={1} lg={3} className="gx-3">
          {storeItems.map(item => (
            <Link 
              className="links" 
              to="/Product" 
              state={{ updateId: item.id, updateImg: item.imgUrl, updateColor: item.color }} 
              key={item.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Col>
                <Card className="h-100 mt-3">
                  <Card.Img
                    className="mt-2"
                    variant="top"
                    src={item.imgUrl}
                    height="300px"
                    style={{ objectFit: "scale-down" }}
                  />
                  {/* Subimos a 180px para dar aire a las 2 líneas de texto posibles */}
                  <Card.Body className="d-flex flex-column justify-content-between" style={{ height: "180px" }}>
                    
                    <div className="d-flex flex-column justify-content-between h-100">
                      
                      {/* Control de 2 líneas máximas con puntos suspensivos */}
                      <Card.Title 
                        className="fs-2 mb-1" 
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          lineHeight: "1.2em",
                          maxHeight: "2.4em"
                        }}
                        title={item.name}
                      >
                        {item.name}
                      </Card.Title>

                      {/* Precio abajo alineado elegantemente */}
                      <div className="text-muted fs-4 mt-auto">
                        {formatCurrency(item.price)}
                      </div>

                    </div>

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