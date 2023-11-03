import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactDetailPage from './pages/ContactDetailPage';
import ContactUsPage from './pages/ContactUsPage';
import HomePage from './pages/HomePage';
import RootPage from './pages/RootPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactUsPage />,
      },
      {
        path: '/contact/:name',
        element: <ContactDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
