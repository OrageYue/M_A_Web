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

    const [ loading_url, setLoadingUrl ] = useState( 'http://yuelei1995.oss-cn-shanghai.aliyuncs.com/20201030%E7%AC%AC%E5%85%AB%E5%B1%8A%E5%8D%97%E6%B5%B7%E5%8C%BA%E5%9F%9F%E5%90%88%E4%BD%9C%E8%AE%BA%E5%9D%9B%E9%82%80%E8%AF%B7%E5%87%BD%E5%AE%A1%E6%89%B92.pdf' );
    const [ page, setPage ] = useState( 0 );

    const onError = (e) => {
        console.log(e)
    }

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
           
            
             {/* <iframe width={window.innerWidth} height={window.innerHeight} src={loading_url}></iframe>  */}
        </div>
    )
};

export default Invitation