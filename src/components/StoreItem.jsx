/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { formatCurrency } from "../utilities/formatCurrency"
import { useLocation } from "react-router-dom"
import { ShoppingCartProvider } from "../context/ShoppingCartProvider"
import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartProvider"

import img1 from "../json/product1.json"
import img7 from "../json/product7.json"
import img13 from "../json/product13.json"
import img19 from "../json/product19.json"

import { Col, Row, Container, Button, Card, Dropdown, Form } from "react-bootstrap"
import DropdownToggle from "react-bootstrap/esm/DropdownToggle"
import DropdownMenu from "react-bootstrap/esm/DropdownMenu"

export function StoreItem() {
  const {
    increaseCartQuantity
  } = useContext(ShoppingCartContext)

  const location = useLocation();

  const productId = (location.state.updateId);
  let img = img1;

  if (productId == 7) { img = img7 } else
    if (productId == 13) { img = img13 } else
      if (productId == 19) { img = img19 }

  const [mainImage, setMainImage] = useState(productId);
  const [formValue, setFormValue] = useState();
  const [sizeValue, setSizeValue] = useState("");

  const { articleInCart } = useContext(ShoppingCartContext);
  const { setArticleInCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    setSizeValue("");
  }, [mainImage])

  const AddToCart = () => {
    return (
      <ShoppingCartProvider>
        {img.filter(item => item.id == mainImage).map(item => (
          !articleInCart.includes(item.articleId) && (
            <Dropdown key={item.id}>
              <DropdownToggle>
                Add to cart
              </DropdownToggle>
              <DropdownMenu>
                <Dropdown onSelect={(eventKey) => { sizeValue == "" ? alert("you must choose size") : increaseCartQuantity(item.id, eventKey, sizeValue); sizeValue !== "" && setArticleInCart((articleInCart) => [...articleInCart, item.articleId]) }}>
                  <Dropdown.Item eventKey={1}>1</Dropdown.Item>
                  <Dropdown.Item eventKey={2}>2</Dropdown.Item>
                  <Dropdown.Item eventKey={3}>3</Dropdown.Item>
                  <Dropdown.Item eventKey={4}>4</Dropdown.Item>
                  <Dropdown.Item eventKey={5}>5</Dropdown.Item>
                  <Dropdown.Item eventKey={6}>6</Dropdown.Item>
                  <Dropdown.Item eventKey={7}>7</Dropdown.Item>
                  <Dropdown.Item eventKey={8}>8</Dropdown.Item>
                  <Dropdown.Item eventKey={9}>9</Dropdown.Item>
                  <Dropdown.Item eventKey={10}>10</Dropdown.Item>
                  <Dropdown.Divider />
                  <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="+10"
                    onChange={(e) => setFormValue(e.target.value)}
                    value={formValue}
                  />
                  {formValue && <Dropdown.Item eventKey={formValue}><Button className="col text-center">Confirm</Button></Dropdown.Item>}
                </Dropdown>
              </DropdownMenu>
            </Dropdown >
          )
          /* : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
              </div>
              <Button
                onClick={() => { removeFromCart(item.id); }}
                variant="danger"
                size="sm"
              >
                Remove from cart
              </Button>
            </div>
          ) */

        ))
        }
      </ShoppingCartProvider >
    )
  }

  return (
    <Container>
      {img.filter(item => item.id == mainImage).map(item => (
        <Row md={2} xs={1} lg={2} className="g-3" key={item.id}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={item.imgUrl}
              height="300px"
              style={{ objectFit: "scale-down", marginTop: "20px" }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{item.name}</span>
              </Card.Title>

            </Card.Body>
          </Card>
          <Col>
            <div>{item.name}</div>
            <div>Rating stars  10,515 ratings | 58 Questions answered</div>
            <div>Price: {formatCurrency(item.price)}</div>
            <div>Color:</div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" key={item.id}>
                {item.color}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown onSelect={(eventKey) => { setMainImage(eventKey) }}>
                  {img.map(item => (
                    <Dropdown.Item key={item.id} eventKey={item.id}>{item.color}</Dropdown.Item>
                  ))
                  }
                </Dropdown>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              {sizeValue == "" ?
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select Size
                </Dropdown.Toggle>
                :
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {sizeValue}
                </Dropdown.Toggle>
              }
              <Dropdown.Menu key={item.id}>
                <Dropdown onSelect={(eventKey) => { setSizeValue(eventKey) }}>
                  {item.size.map((item) => {
                    return (
                      <div key={item}>
                        <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
                      </div>
                    )
                  })
                  }
                </Dropdown>
              </Dropdown.Menu>
            </Dropdown>
            {AddToCart()}
            <Row md={6} xs={1} lg={6} className="g-3" key={item.id}>
              {img.map(item => (
                <Col key={item.id}>
                  <Card className="visualImageContainer" onClick={() => { setMainImage(item.id) }}>
                    <Card.Img className="visualImage"
                      variant="top"
                      src={item.imgUrl}
                      height="50px"
                      style={{ objectFit: "scale-down" }} />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row >
      ))
      }
    </Container >
  )
}