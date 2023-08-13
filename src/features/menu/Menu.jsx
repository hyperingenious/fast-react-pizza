import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useDispatch } from "react-redux";
import { setData } from "./menuSlice";

function Menu() {
  const menu = useLoaderData();
  const dispatch = useDispatch();
  dispatch(setData(menu));

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
