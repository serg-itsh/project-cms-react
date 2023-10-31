import { Link } from "react-router-dom";
import Container from "./common/Conteiner";
// import { Container, CardWrapper, ProductName } from "./ProductList.styled";

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`${product.id}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <div>{product.name}</div>
          </Link>
        </li>
      ))}
    </Container>
  );
};
