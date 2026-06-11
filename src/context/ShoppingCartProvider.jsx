/* eslint-disable react/prop-types */
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useState, createContext } from "react"

export const ShoppingCartContext = createContext({})

export function ShoppingCartProvider({ children }) {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
    const [email, setEmail] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    
    const [articleInCart, setArticleInCart] = useLocalStorage(
        "shopping-cartArticles",
        []
    )
    const [cartItems, setCartItems] = useLocalStorage(
        "shopping-cart",
        []
    )

    // Calcula la cantidad total de artículos en el carrito
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id, eventKey, sizeValue) {
        setCartItems(currItems => {
            const parsedQuantity = Number(eventKey) || 1; // Asegura que sea un número válido
            
            if (currItems.find(item => item.id === id) == null) {
                // Si es un producto nuevo, lo añade
                return [...currItems, { id, quantity: parsedQuantity, sizeValue }]
            } else {
                // SOLUCIÓN: Si ya existe, actualiza sumándole la nueva cantidad
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + parsedQuantity }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    function RemoveArticleIdFromCart(e) {
        // Corregido: setArticleInCart no devuelve un valor ejecutable, 
        // solo actualiza el estado. Quitamos la variable 'let x'.
        setArticleInCart(prevArticles => 
            prevArticles.filter(item => item.articleId !== e.target)
        )
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                removeFromCart,
                RemoveArticleIdFromCart,
                openCart,
                closeCart,
                cartItems,
                cartQuantity,
                userIsLoggedIn,
                setUserIsLoggedIn,
                email,
                setEmail,
                articleInCart,
                setArticleInCart
            }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} color={""} sizeValue={""} />
        </ShoppingCartContext.Provider>
    )
}