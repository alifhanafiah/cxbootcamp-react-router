import { Link, Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <>
      <header style={{ backgroundColor: 'hotpink' }}>
        <h1>halo ygy</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
