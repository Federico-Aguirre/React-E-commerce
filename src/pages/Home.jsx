import { Col, Container, Row, Nav, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import storeItems from "../json/presentation.json"
import { formatCurrency } from "../utilities/formatCurrency"

export function Home() {
  return (
    <Container>
      <Nav className="me-auto">
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
                  <Card.Body className="d-flex flex-column justify-content-between" style={{ height: "180px" }}>
                    
                    {/* Cambiamos el contenedor a flex-column para que el precio quede abajo del título si este crece */}
                    <div className="d-flex flex-column justify-content-between h-100">
                      
                      {/* El título ahora permite hasta 2 líneas de texto */}
                      <Card.Title 
                        className="fs-2 mb-1" 
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2, // <--- ¡AQUÍ cambias el número de líneas máximas! (ej: 2 o 3)
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          lineHeight: "1.2em",
                          maxHeight: "2.4em" // Esto asegura que no pase de las 2 líneas (lineHeight * WebkitLineClamp)
                        }}
                        title={item.name}
                      >
                        {item.name}
                      </Card.Title>

                      {/* El precio ahora se muestra abajo del título de forma limpia */}
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
      </Nav>
    </Container>
  )
}