import Root from 'components/templates/Root';
import Error from 'components/templates/Error';
import Protected from 'components/atoms/Protected';
import Login from 'components/pages/Login';
import Dashboard from 'components/pages/Dashboard';

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
              <Dashboard />
            </Protected>
          ),
        },
        {
          path: 'login',
          element: <Login />,
        },
      ],
    },
  ];

  return { routes };
}
