/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Button, Stack } from "react-bootstrap"
import storeItems from "../json/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartProvider"

export function CartItem({ id, quantity, sizeValue }) {
  const { removeFromCart, RemoveArticleIdFromCart } = useContext(ShoppingCartContext)
  const item = storeItems.find(i => i.id === id)

  //this makes the image shown in the cart be the principal of that article
  const principalImage = storeItems.find(i => i.articleId === item.articleId && i.principalArticleImage == "yes")
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={principalImage.imgUrl}
        style={{ width: "auto", height: "175px", objectFit: "cover", paddingTop: "100px" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
          <div>Color:{item.color}</div>
          <div>Size:{sizeValue}</div>
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => { removeFromCart(item.id), RemoveArticleIdFromCart(item.articleId) }}
      >
        &times;
      </Button>
    </Stack >
  )
}
