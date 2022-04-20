import React from 'react';
import {
  AppSidebar, AppHeader, AppContent, AppFooter,
} from '../../components/index';

const Dashboard = () => {
  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </>
  );
};

export default Dashboard;
