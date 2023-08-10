import {Link} from 'react-router-dom';

function PageNotFound() : JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to='/'></Link>
    </>
  );
}

export default PageNotFound;
