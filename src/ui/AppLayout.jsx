import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../ui/Loader";
import SearchOrder from "../features/order/SearchOrder";

function AppLayout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" ? <Loader /> : ""}
      <div>
        <Header />
        <SearchOrder/>
        <main>
          <Outlet />
        </main>
        <CartOverview />
      </div>
    </>
  );
}

export default AppLayout;
