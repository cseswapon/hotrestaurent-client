import React from 'react';

const Diner = ({ diners }) => {
    console.log(diners)
    return (
      <div>
        <h1>Diner {diners.length}</h1>
      </div>
    );
};

export default Diner;