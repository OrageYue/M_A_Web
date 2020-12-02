import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import M_PDF from '../../assets/content.pdf'
import FileViewer from 'react-file-viewer';

function Invitation () {

    const [ loading_url, setLoadingUrl ] = useState( 'http://yuelei1995.oss-cn-shanghai.aliyuncs.com/20201030%E7%AC%AC%E5%85%AB%E5%B1%8A%E5%8D%97%E6%B5%B7%E5%8C%BA%E5%9F%9F%E5%90%88%E4%BD%9C%E8%AE%BA%E5%9D%9B%E9%82%80%E8%AF%B7%E5%87%BD%E5%AE%A1%E6%89%B92.pdf' );
    const [ page, setPage ] = useState( 0 );

    const onError = (e) => {
        console.log(e)
    }

    return (
        <div style={ { width: "100%" } }>
          
             <iframe width={window.innerWidth} height={window.innerHeight} src={loading_url}></iframe> 
        </div>
    )
};

export default Invitation