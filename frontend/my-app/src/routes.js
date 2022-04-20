import React from 'react';

const Dashboard = React.lazy(() => import('./views/pages/Dashboard'));

const routes = [
  {path: '/', exact: true, name: 'Login'},
  {path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
];

export default routes;
