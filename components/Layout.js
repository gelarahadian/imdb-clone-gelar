import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* SearchBox */}

      {children}
    </>
  );
}
