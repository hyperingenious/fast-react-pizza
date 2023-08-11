import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const data = useLoaderData();

  return (
    <div>
      {data.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id}/>
      ))}
    </div>
  );
}

export async function loader() {
  const load = await getMenu();
  return load;
}

export default Menu;
