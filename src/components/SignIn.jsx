import { useState, useContext } from "react"
import { auth, googleProvider } from "../firebaseConfig/firebase"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { NavLink, useNavigate } from "react-router-dom";
import { Col, Container, Nav, Button } from "react-bootstrap";
import { ShoppingCartContext } from "../context/ShoppingCartProvider";

export const SignIn = () => {
    const { email, setEmail, setUserIsLoggedIn } = useContext(ShoppingCartContext);
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const SignInButton = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setUserIsLoggedIn(true)
            alert("Sign in successfully")
            navigate("/")
        } catch (error) {
            console.error(error)
            alert("Error al registrarse: " + error.message)
        }
    }

    const SignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            if (result.user) {
                setUserIsLoggedIn(true)
                alert("Registro con Google exitoso")
                navigate("/")
            }
        } catch (error) {
            console.error("Error capturado en el Popup:", error)
            // Si el navegador sigue molestando, aquí veremos el código exacto
        }
    }

    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
            <Container style={{ width: "400px", backgroundColor: "#dbdbdb" }} className="d-flex flex-column place-content-center row-gap-4 m-auto p-5 rounded">
                <Col className="d-flex fw-bolder fs-1 justify-content-center">Sign In</Col>
                
                <Col className="d-flex align-items-center bg-white px-2" style={{ borderRadius: "5px", border: "1px solid grey" }}>
                    <input style={{ height: "35px", width: "100%", border: "none" }} placeholder="Email.." type="email" onChange={(e) => setEmail(e.target.value)} />
                    <img style={{ height: "30px", width: "30px" }} src="../../imgs/email-icon.svg" alt="Email icon" />
                </Col>
                
                <Col className="d-flex align-items-center bg-white px-2" style={{ borderRadius: "5px", border: "1px solid grey" }}>
                    <input className="d-flex align-items-center bg-white px-2" style={{ height: "35px", width: "100%", border: "none" }} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <img style={{ height: "30px", width: "30px" }} src="../../imgs/padlockIcon.svg" alt="Padlock icon" />
                </Col>
                
                <Button onClick={SignInButton}>Sign in</Button>
                
                <Col className="d-flex flex-row justify-content-center">
                    <div>You have an account?&nbsp;</div>
                    <Nav.Link to="/logIn" as={NavLink} className="fw-bold">
                        Log In
                    </Nav.Link>
                </Col>
                
                {/* Agregamos el onClick al botón y type="button" */}
                <button className="border-0 bg-transparent" onClick={SignInWithGoogle} type="button">
                    <img style={{ height: "30px", width: "30px", cursor: "pointer" }} src="../../imgs/googleIcon.svg" alt="Google icon" />
                </button>
            </Container>
        </div>
    )
}