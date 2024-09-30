import React from 'react';
import './Loader.css'; 

const Loader = ({ loading, children }) => {
  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div> {}
      </div>
    );
  }

  return <>{children}</>;
};

export default Loader;
