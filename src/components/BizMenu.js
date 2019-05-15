import React from 'react';

const styles = {
  border: '1px solid grey',
  width: 200,
  height: 400,
  display: 'flex',
}

const BizMenu = () => {
  return (
    <div className='tc dib br3 pa3 ma2 bw2 shadow-5' style={styles}>
      <div>
        <a className='grow' href='#'>Post Job</a>
        <a href='#'>Browse Developers</a>
        <a href='#'>Browse Jobs</a>
        <a href='#'>Help</a>
      </div>
    </div>
  );
}

export default BizMenu;