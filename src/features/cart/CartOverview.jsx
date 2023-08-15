import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const { totalPizza, totalPrice } = useSelector((store) => store.pizzaMenu);
  console.log(totalPizza)
  return totalPizza === 0 ? (
    ""
  ) : (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalPizza} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
