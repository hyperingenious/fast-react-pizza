import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={"primary"}>Mark priority</Button>
    </fetcher.Form>
  );
}

export async function action({
  request,
  params /*give prams of the current url*/,
}) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  
  // there are two method to update data on the server first is PATCH and second is PUT: patch updates the data and the PUT re-writes the whole data
  return null;
}

export default UpdateOrder;
