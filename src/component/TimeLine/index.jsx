import React from 'react';
import './index.less';
import PDF_1 from '../../assets/pdf_1.png';
import PDF_2 from '../../assets/pdf_2.png';
import PDF_3 from '../../assets/pdf_3.png';
import PDF_4 from '../../assets/pdf_4.png';
import PDF_5 from '../../assets/pdf_5.png';
import PDF_6 from '../../assets/pdf_6.png';
function TimerLiner () {
    return (
        <div style={{marginTop:"20px"}}>
            <img src={ PDF_1 } style={ { width: "100%" } } />
            <img src={ PDF_2 } style={ { width: "100%" } } />
            <img src={ PDF_3 } style={ { width: "100%" } } />
            <img src={ PDF_4 } style={ { width: "100%" } } />
            <img src={ PDF_5 } style={ {width:"100%"} }/>
            <img src={ PDF_6 } style={ {width:"100%"} }/>
        </div>
    )
};

export default TimerLiner