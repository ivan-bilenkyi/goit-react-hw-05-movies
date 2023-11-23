// import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { NavLink, Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <Layout>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <GlobalStyle />
      {/* <Toaster /> */}
    </Layout>
  );
};
