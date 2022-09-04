import React from 'react';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      { children }
      <Footer />
    </div>
  )
}

export default DefaultLayout