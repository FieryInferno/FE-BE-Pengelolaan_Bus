import {HashRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './scss/style.scss';

const App = () => {
  const Login = React.lazy(() => import('./views/pages/Login'));

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route path="/" name="Login" element={<Login />} />
          <Route exact path="/login" name="Login Page" element={<Login />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
