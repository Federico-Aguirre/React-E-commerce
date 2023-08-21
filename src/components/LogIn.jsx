import { Button, Container, Nav, Col } from "react-bootstrap"
import { useState, useContext } from "react"
import { auth, googleProvider } from "../firebaseConfig/firebase"
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartProvider";

export const LogIn = () => {
    const { setUserIsLoggedIn } = useContext(ShoppingCartContext);
    const { email } = useContext(ShoppingCartContext);
    const { setEmail } = useContext(ShoppingCartContext);
    const [password, setPassword] = useState("")


    const LogInButton = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error)
        }
        setUserIsLoggedIn(true)
        alert("Log in sucessfully")
    }

    const SignInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="asd" style={{ width: "100vw", height: "100vh", display: "flex" }}>
            <Container style={{ width: "400px", backgroundColor: "#dbdbdb" }} className="d-flex flex-column place-content-center row-gap-4 m-auto p-5 rounded">
                <Col className="d-flex fw-bolder fs-1 justify-content-center">Login</Col>
                <Col className="d-flex align-items-center bg-white px-2" style={{ borderRadius: "5px", border: "1px solid grey" }}>
                    <input style={{ height: "35px", width: "100%", border: "none" }} placeholder="Email.." type="email" onChange={(e) => setEmail(e.target.value)} />
                    <img style={{ height: "30px", width: "30px" }} src="../../imgs/email-icon.svg" alt="Email icon" />
                </Col>
                <Col className="d-flex align-items-center bg-white px-2" style={{ borderRadius: "5px", border: "1px solid grey" }}>
                    <input className="d-flex align-items-center bg-white px-2" style={{ height: "35px", width: "100%", border: "none" }} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <img style={{ height: "30px", width: "30px" }} src="../../imgs/padlockIcon.svg" alt="Padlock icon" />
                </Col>
                <Button onClick={LogInButton}>Log in</Button>
                <Col className="d-flex flex-row justify-content-center">
                    <div>Don`t have an account?&nbsp;</div>
                    <Nav.Link to="/signIn" as={NavLink} className="fw-bold">
                        Register
                    </Nav.Link>
                </Col>
                <button className="border-0 bg-transparent">
                    <img style={{ height: "30px", width: "30px" }} src="../../imgs/googleIcon.svg" alt="Google icon" onClick={SignInWithGoogle} />
                </button>
            </Container>
        </div>
    )
}