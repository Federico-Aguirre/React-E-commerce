import { Button, Container, Nav, Navbar as NavbarBs, Col, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartProvider";
import { useContext, useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";
import { LogOut } from "./LogOut";

export function Navbar() {
  const { setUserIsLoggedIn } = useContext(ShoppingCartContext);
  const { userIsLoggedIn } = useContext(ShoppingCartContext);
  const { email } = useContext(ShoppingCartContext);
  const [results, setResults] = useState([]);
  const { openCart, cartQuantity } = useContext(ShoppingCartContext)


  return (
    <NavbarBs style={{ height: 110 }} sticky="top" className="bg-white shadow-sm" >
      <Container style={{ width: "90vw", height: "100%" }} className="d-flex flex-column justify-content-center row-gap-2 ">
        <Row className="d-flex flex-row align-content-start align-items-start" style={{ width: "90vw", height: "50vh" }}>
          <Col className="d-flex justify-content-end">
            {
              userIsLoggedIn === false ?
                //!auth?.currentUser?.email ?
                (
                  <Col className="d-flex flex-row justify-content-start">
                    <Nav.Link to="/logIn" as={NavLink}>
                      Log In /&nbsp;
                    </Nav.Link>
                    <Nav.Link to="/signIn" as={NavLink}>
                      Sign In
                    </Nav.Link>
                  </Col>)
                :
                (
                  <Col className="d-flex flex-row justify-content-start">
                    <div>{email} /&nbsp;</div>
                    <Button onClick={() => { LogOut(); setUserIsLoggedIn(false) }}>Logout</Button>
                  </Col>
                )
            }
          </Col>
        </Row>
        <Row className="d-flex flex-row" style={{ width: "90vw" }}>
          <Col xs={4} >
            <Nav>
              <Nav.Link to="/" as={NavLink}>
                Home
              </Nav.Link>
              <Nav.Link to="/store" as={NavLink}>
                Store
              </Nav.Link>
              <Nav.Link to="/about" as={NavLink}>
                About
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={4} className="d-flex align-items-center justify-content-center">
            <SearchBar setResults={setResults} />
            <SearchResultList results={results} />
          </Col>
          <Col xs={4} className="d-flex align-items-center justify-content-end">
            {
              cartQuantity > 0 ? (
                <Button
                  onClick={openCart}
                  style={{ width: "3rem", height: "3rem", position: "relative" }}
                  variant="outline-primary"
                  className="rounded-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                  >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                  </svg>

                  <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                      color: "white",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      transform: "translate(50%, 25%)",
                    }}
                  >
                    {cartQuantity}
                  </div>
                </Button>
              ) : (<div style={{ width: "3rem", height: "3rem", position: "relative" }}></div>)
            }
          </Col>
        </Row>
      </Container >
    </NavbarBs >
  )
}
