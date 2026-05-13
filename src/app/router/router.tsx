import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/shared/ui/layout/Layout';
import { HomePage, DashboardPage, RequestsPage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'requests', element: <RequestsPage /> },
    ],
  },
]);
