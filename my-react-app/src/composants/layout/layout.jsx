// src/components/layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

function Layout() {
  return (
    <div className="layout">
      <Header />
        <Outlet /> {/* C'est ici que s'afficheront vos pages */}
      <Footer />
    </div>
  );
}

export default Layout;
