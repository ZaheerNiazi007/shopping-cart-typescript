import { Button, Card, CardActions } from "@mui/material";
import { useState } from "react";
import { CardItemType } from "../App";
import { Wrapper } from "./item.styles";
type Props = {
  item: CardItemType;
  handleAddCart: (clickedItem: CardItemType) => void;
};
const Item: React.FC<Props> = ({ item, handleAddCart }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Wrapper>
      <Card>
        <img src={item.image}></img>
        <div>
          <h3>{item.title}</h3>

          <p>
            {showMore
              ? item.description
              : `${item.description.substring(0, 250)}`}
            <Button
              sx={{ textDecoration: "none" }}
              size="small"
              color="primary"
              onClick={() => setShowMore(!showMore)}
            >
              see more
            </Button>
          </p>

          <h3>{item.price}</h3>
        </div>
      </Card>
      <Button variant="contained" onClick={() => handleAddCart(item)}>
        Add to Cart
      </Button>
    </Wrapper>
  );
};
export default Item;
