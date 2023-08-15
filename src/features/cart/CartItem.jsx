import { useSearchParams } from "react-router-dom";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { decrease, deleteMe, increase } from "../menu/menuSlice";
import { useDispatch } from "react-redux";

function Meter({ quantity, handleDecrease, handleDelete, handleIncrease }) {
  return (
    <div className="flex items-center gap-3 sm:gap-8">
      <div className="flex items-center gap-2 md:gap-3">
        <button
          onClick={handleDecrease}
          className="inline-block rounded-full bg-yellow-400 px-2.5 py-1 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-3.5 md:py-2"
        >
          -
        </button>
        <span className="text-sm font-medium">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="inline-block rounded-full bg-yellow-400 px-2.5 py-1 text-sm text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-3.5 md:py-2"
        >
          +
        </button>
      </div>
      <button
        onClick={handleDelete}
        className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm text-xs font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-2.5"
      >
        Delete
      </button>
    </div>
  );
}

function CartItem({ item }) {
  const { id, name, quantity, unitPrice } = item;
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
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">
          {formatCurrency(quantity * unitPrice)}
        </p>
        <Meter
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleDelete={handleDelete}
        />
      </div>
    </li>
  );
}

export default CartItem;
