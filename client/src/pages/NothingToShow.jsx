import React from 'react';

const NothingToShow = () => {
  var darkmode = localStorage.getItem("darkmode");
  return (
    <div style={{ textAlign: 'center', margin: '50px', fontFamily: 'Arial, sans-serif'}}>
      <h1>Nothing to Show Here</h1>
      <p>Please go to other categories to explore content.</p>
    </div>
  );
};

export default NothingToShow;