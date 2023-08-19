import { useNavigate } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const navigate = useNavigate();
  const { username } = useSelector((store) => store.user);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button type={"primary"} to={"/menu"}>
          Order the pizzas, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
