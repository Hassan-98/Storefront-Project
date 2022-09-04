import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useStoreSelector } from 'store';

import DefaultLayout from 'layouts/Default.layout';
import AuthLayout from 'layouts/Auth.layout';

import Home from '../pages/Home';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

type RoutesGuardProps = {
  requireAuthentication: boolean;
  Component: React.FC;
  Layout?: React.FC<LayoutProps>;
}

type PageWrapperProps = {
  Layout?: React.FC<LayoutProps>;
  Page: React.FC;
}

const GuardedRoute = ({ requireAuthentication, Component, Layout = DefaultLayout }: RoutesGuardProps): JSX.Element => {
  const user = useStoreSelector(({ user: state }) => state.user);

  if ((requireAuthentication && user) || (!requireAuthentication && !user)) {
    return (
      <Layout>
        <Component />
      </Layout>
    )
  } else if (requireAuthentication && !user) {
    return <Navigate to="/login" />
  } else if (!requireAuthentication && user) {
    return <Navigate to="/" />
  }

  return (
    <Layout>
      <Component />
    </Layout>
  )
}

const PageWrapper = ({ Layout = DefaultLayout, Page }: PageWrapperProps) => (<Layout><Page /></Layout>);

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageWrapper Page={Home} />} />
        <Route path="/products" element={<PageWrapper Page={Products} />} />
        <Route path="/user/products/:user_id" element={<PageWrapper Page={Products} />} />
        <Route path="/product/:product_id" element={<PageWrapper Page={Product} />} />
        <Route path="/user/:user_id" element={<GuardedRoute requireAuthentication Component={Profile} />} />  
        <Route path="/login" element={<GuardedRoute requireAuthentication={false} Component={Login} Layout={AuthLayout} />} />
        <Route path="/signup" element={<GuardedRoute requireAuthentication={false} Component={Signup} Layout={AuthLayout} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes