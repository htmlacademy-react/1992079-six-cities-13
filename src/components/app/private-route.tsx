import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  elements: JSX.Element;
};

function PrivateRoute({elements}: PrivateRouteProps): JSX.Element {
  const hasAccess = false;

  return hasAccess ? elements : <Navigate to={'/login'} />;
}

export default PrivateRoute;
