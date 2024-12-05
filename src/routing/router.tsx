import { createBrowserRouter } from 'react-router-dom';

import CreateMoviePage from 'src/common/pages/create-movie';
import DashboardPage from 'src/common/pages/dashboard';
import EditMoviePage from 'src/common/pages/edit-movie';
import LoginPage from 'src/common/pages/login';

import Path from './paths';

const routes = [
  {
    path: Path.LOGIN,
    element: <LoginPage />
  },
  {
    path: Path.DASHBOARD,
    element: <DashboardPage />
  },
  { path: Path.CREATE_MOVIE, element: <CreateMoviePage /> },
  { path: `${Path.EDIT_MOVIE}/:id`, element: <EditMoviePage /> }
];

const router = createBrowserRouter(routes);

export default router;
