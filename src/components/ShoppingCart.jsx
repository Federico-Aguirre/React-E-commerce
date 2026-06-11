/* eslint-disable react/prop-types */
import { Offcanvas, Stack } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../json/items.json"
import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartProvider"

export function ShoppingCart({ isOpen, color, sizeValue }) {
  const { closeCart, cartItems } = useContext(ShoppingCartContext)
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem color={color} sizeValue={sizeValue} key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
