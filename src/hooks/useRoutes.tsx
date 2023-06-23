import Root from 'components/templates/Root';
import Protected from 'components/atoms/Protected';
import Signin from 'components/pages/Signin';
import Signup from 'components/pages/Signup';
import Services from 'components/pages/Services';
import Home from 'components/pages/Home';
import Error from 'components/templates/Error';
import ErrorPage from 'components/pages/Error';

export default function useRoutes() {
  const routes = [
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: (
            <Protected>
              <Home />
            </Protected>
          ),
        },
        {
          path: 'services',
          element: (
            <Protected>
              <Services />
            </Protected>
          ),
        },
        {
          path: 'signin',
          element: <Signin />,
        },
        {
          path: 'signup',
          element: <Signup />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
  ];

  return { routes };
}
