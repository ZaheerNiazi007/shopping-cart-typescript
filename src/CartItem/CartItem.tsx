import { Button } from "@mui/material";
import { CardItemType } from "../App";
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CardItemType;
  addToCart: (clickedItem: CardItemType) => void;
  removeFromCart: (id: number) => void;
};
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <p>price:${item.price}</p>
      <p>Total:${(item.amount * item.price).toFixed(2)}</p>
    </div>
    <div className="buttons">
      <div>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
      </div>
      <p>{item.amount}</p>
      <div>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);
export default CartItem;
