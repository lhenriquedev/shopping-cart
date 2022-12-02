import { Button, Stack } from "react-bootstrap";
import { HiOutlineTrash } from "react-icons/hi2";
import { useShoppingCart } from "../../context/ShoppingCartContext";

import storeItems from "../../data/items.json";
import { formatCurrency } from "../../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span
              className="text-muted"
              style={{
                fontSize: "0.75rem",
              }}
            >
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted">{formatCurrency(item.price)}</div>
        <div>{formatCurrency(item.price * quantity)}</div>
      </div>
      <Button
        variant="outlined-danger"
        size="lg"
        onClick={() => removeFromCart(item.id)}
      >
        <HiOutlineTrash />
      </Button>
    </Stack>
  );
}
