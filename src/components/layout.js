import React from 'react'

const style = {
    'margin' : 0,
    'padding' : '2rem'
};

const Layout = ({ children }) => (
  <div style={style}>
    {children}
  </div>
);

export default Layout
