import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../menu/menuSlice";

function Cart() {
  const {
    user: { name },
    pizzaMenu: { pizzas, totalPizza },
  } = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      {totalPizza === 0 ? (
        <h2 className="stroke-stone-900 mt-7  text-xl font-semibold">
          Your cart, Your cart is still empty. Start adding some pizzas :)
        </h2>
      ) : (
        <>
          <h2 className="mt-7 text-xl font-semibold">Your cart, {name}</h2>

          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {pizzas.map((item) =>
              item.quantity === 0 ? "" : <CartItem item={item} key={item.key} />
            )}
          </ul>

          <div className="mt-6 space-x-2">
            <Button to="/order/new" type="primary">
              Order pizzas
            </Button>

            <button
              className="inline-block rounded-full border-2 border-stone-300 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5"
              onClick={() => dispatch(clearCart(""))}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
