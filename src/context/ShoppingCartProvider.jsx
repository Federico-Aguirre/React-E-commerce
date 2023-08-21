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
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: eventKey - 0, sizeValue }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id) {
        setCartItems(currItems => {
            return (currItems.filter(item => item.id !== id)
            )
        })
    }

    function RemoveArticleIdFromCart(e) {
        let x = setArticleInCart(articleInCart.filter(items => items.articleId !== e.target));
        return (
            x
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
