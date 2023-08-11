import { useNavigate, useRouteError } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
const error = useRouteError();
console.log(error)

  return (
    <div>
      <h1>Something went wrong 😢 {error.data || error.message}</h1>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
