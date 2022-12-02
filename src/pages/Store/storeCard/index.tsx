import { Button, Card } from "react-bootstrap";
import { HiOutlineTrash } from "react-icons/hi2";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { formatCurrency } from "../../../utils/formatCurrency";

type StoreCardProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
};

export function StoreCard({
  id,
  name,
  price,
  imgUrl,
  description,
}: StoreCardProps) {
  const {
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{
          objectFit: "cover",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              style={{
                background: "#6e44ff",
                borderColor: "#6e44ff",
              }}
              className="w-100"
              onClick={() => increaseCartQuantity(id)}
            >
              Adicionar ao carrinho
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column "
              style={{
                gap: ".5rem",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  gap: ".5rem",
                }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                  no carrinho
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(id)}>
                <HiOutlineTrash />
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
