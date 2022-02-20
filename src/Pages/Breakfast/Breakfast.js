import React from 'react';

const Breakfast = ({ breakfast }) => {
    console.log(breakfast)
    return (
      <div>
        <h1>Breakfast {breakfast.length}</h1>
      </div>
    );
};

export default Breakfast;