import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { decrease, deleteMe, increase } from "./menuSlice";

function Meter({ quantity, handleDecrease, handleDelete, handleIncrease }) {
  return (
    <div className="flex items-center gap-3 sm:gap-8">
      <div className="flex items-center gap-2 md:gap-3">
        <button onClick={handleDecrease} className="inline-block rounded-full bg-yellow-400 px-2.5 py-1 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-3.5 md:py-2">
          -
        </button>
        <span className="text-sm font-medium">{quantity}</span>
        <button onClick={handleIncrease} className="inline-block rounded-full bg-yellow-400 px-2.5 py-1 text-sm text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-3.5 md:py-2">
          +
        </button>
      </div>
      <button onClick={handleDelete} className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm text-xs font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-2.5">
        Delete
      </button>
    </div>
  );
}

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentPizza = useSelector((store) =>
    store.pizzaMenu.pizzas.find((pizza) => pizza.id === id)
  );
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increase(+id));
  }
  function handleDecrease() {
    dispatch(decrease(+id));
  }
  function handleDelete() {
    dispatch(deleteMe(+id));
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {soldOut ? (
            ""
          ) : currentPizza.quantity > 0 ? (
            <Meter
              quantity={currentPizza.quantity}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              handleDelete={handleDelete}
            />
          ) : (
            <Button type="small" handleClick={handleIncrease}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
