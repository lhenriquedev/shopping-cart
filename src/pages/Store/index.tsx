import { Col, Row } from "react-bootstrap";
import storeItems from "../../data/items.json";
import { StoreCard } from "./storeCard";

export function Store() {
  return (
    <>
      <h3>Bem vindo a barraquinha do Henrique</h3>
      <p>Faça seu pedido e experimente a melhor comida de Butiá</p>

      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreCard {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
