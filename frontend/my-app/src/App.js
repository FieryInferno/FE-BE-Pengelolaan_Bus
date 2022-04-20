import {HashRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './scss/style.scss';
import {useSelector} from 'react-redux';

const App = () => {
  const Login = React.lazy(() => import('./views/pages/Login'));
  const Dashboard = React.lazy(() => import('./views/pages/Dashboard'));
  const loginData = useSelector((state) => state.login);

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route
            path="/"
            name="Login"
            element={loginData ? <Dashboard /> : <Login />}
          />
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route
            exact
            path="/dashboard"
            name="Dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
