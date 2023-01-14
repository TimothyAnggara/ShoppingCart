import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import storeItems from "../data/items.json"

type CartItemProps = {
    id:number
    quantity: number
}



export function CartItem({id, quantity}){
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i=>i.id ===id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
            {item.name} {" "}
            {quantity > 1 && (<span className="text-muted" style={{fontSize: ".65 rem"}}>
                x{quantity}
                </span>
    )}
        </div>
        </div>
        <div className="text-muted" style={{fontSize: ".75 rem"}}>{formatCurrency(item.price * quantity)}</div>
        <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
        </Stack>
    )
}