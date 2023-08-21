import './css/global.css'
import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from './components/About'
import { Product } from "./pages/Product"
import { ShoppingCartProvider } from "./context/ShoppingCartProvider"
import { SignIn } from "./components/SignIn"
import { LogIn } from "./components/LogIn"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App