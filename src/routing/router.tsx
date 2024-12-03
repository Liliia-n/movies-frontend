import { createBrowserRouter } from 'react-router-dom';


const routes = {
  path: Path.HOME,
  children: [
    {
      element: <StandardLayout />,
      children: [
        {
          path: Path.LOGIN,
          element: (
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          )
        },
      ]
    }
  ]
};

const router = createBrowserRouter([routes]);

export default router;
