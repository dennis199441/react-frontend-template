import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../../App.css';

function FullScreenLoading() {
  return (
    <div className="Loading">
        <CircularProgress style={{marginTop: '20%'}}/>
    </div>
  );
}

export default FullScreenLoading;