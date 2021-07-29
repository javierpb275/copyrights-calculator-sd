import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '1px solid black', height: '120px', backgroundColor: 'black'}}>
      {props.children}
    </div>
  );
};

export default Scroll;