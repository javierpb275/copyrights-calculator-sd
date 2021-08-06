import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid lightGrey', height: '120px', backgroundColor: 'black', marginTop: '10px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;