import { useState } from "react";
import { useQuery } from "react-query";
import { CardTypeMap, Drawer, Grid } from "@mui/material";
import { LinearProgress } from "@mui/material";
import Item from "../src/Item/Item";
// import Grid from "@mui/material";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { Wrapper, StyledButton } from "./App.style";
import Cart from "./Cart/Cart";
import { info } from "console";
import { idText } from "typescript";

export type CardItemType = {
  id: number;
  name: string;
  price: number;
  category: number;
  image: string;
  title: string;
  amount: number;
  description: string;
};
const getProducts = async (): Promise<CardItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [cartOpen, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([] as CardItemType[]);
  const { data, isLoading, error } = useQuery<CardItemType[]>(
    "prodcuts",
    getProducts
  );
  console.log(data);
  const getTotalItems = (items: CardItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
  const handleAddCart = (clickedItem: CardItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CardItemType[])
    );
  };
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something wrong....</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setOpenCart(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddCart={handleAddCart} />
          </Grid>
        ))}
      </Grid>
      <StyledButton onClick={() => setOpenCart(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartOutlined />
        </Badge>
      </StyledButton>
    </Wrapper>
  );
};

export default App;
