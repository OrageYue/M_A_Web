import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import M_PDF from '../../assets/content.pdf'
import FileViewer from 'react-file-viewer';
import I_PDF_1 from '../../assets/i_pdf_1.png';
import I_PDF_2 from '../../assets/i_pdf_2.png';
import I_PDF_3 from '../../assets/i_pdf_3.png';
import I_PDF_4 from '../../assets/i_pdf_4.png';
import I_PDF_5 from '../../assets/i_pdf_5.png';
import M_BACK_ARROW from '../../assets/back_arrow.png';

function Invitation () {

    const mapStyle = {
        boxSizing: 'border-box',
        width:  window.innerWidth,
        height: window.innerHeight
    }
    return (
        <div style={ { width: "100%" } }>
            <div style={{height:"60px",width:"100%",background:"#ffffff00",position:"fixed"}}>
                <img onClick={()=>window.history.back()} src={ M_BACK_ARROW } style={ {height:"20px",position:"absolute",top:"50%",marginTop:"-5px",marginLeft:"20px"} }/>
           </div>
          
            <div style={ { position: "absolute",marginTop:"20px" } } className='container' id='container' style={ mapStyle }>
                <img src={ I_PDF_1 } style={ { width: "100%" } } />
                <img src={ I_PDF_2 } style={ { width: "100%" } } />
                <img src={ I_PDF_3 } style={ { width: "100%" } } />
                <img src={ I_PDF_4 } style={ { width: "100%" } } />
                <img src={ I_PDF_5 } style={ { width: "100%" } } />
            </div>
        </div>
    )
};

export default Invitation