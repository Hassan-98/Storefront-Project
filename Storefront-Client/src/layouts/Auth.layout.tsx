import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      { children }
      <Footer />
    </div>
  )
}

export default AuthLayout