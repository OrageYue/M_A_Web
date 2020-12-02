import React, { useCallback, useMemo, useState } from 'react';
import TimerLiner from '../../component/TimeLine/index.jsx';

import { withRouter } from 'react-router-dom';

function Schedule (props) {

    return (
        <div style={ { padding: "0 20px", paddingTop: "60px" } }>
            <TimerLiner/>
        </div>
    )
};

export default withRouter(Schedule) ;