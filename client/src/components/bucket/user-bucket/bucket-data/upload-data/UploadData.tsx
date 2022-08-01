import { useState } from 'react';

import './upload-data.scss';

import { UploadFile, UploadFileAWS } from '../../../../../api/UserApiRequests';
import Loader from '../../../../loader/Loader';


const UploadData = ( props: {dataChanged: Function} ) => {

    const [file,setFile] = useState<any>(null);
    const [msg,setMsg] = useState<string | null>(null);
    const [AWSmsg,setAWSMsg] = useState<string | null>(null);
    const [error,setError] = useState<boolean | null>(null);
    const [pending,setPending] = useState<boolean>(false);

    const onFileSelectHandler = (event: any) => setFile(event.target.files[0]);

    const onFileUploadHandler = async (event: any) => {
        event.preventDefault();
        const fileData = new FormData();
        if( !file ) return;
        fileData.append('file', file );
        setPending(true);
        const awsData = await UploadFileAWS(fileData,sessionStorage.getItem('token'));
        if( awsData.aws ){ setError(false); setAWSMsg('File "' + awsData.aws ); }
        setTimeout( async ()=>{
            const data = await UploadFile(fileData, sessionStorage.getItem('token'));        
            if( data.fileName ){
                setFile(null); setError(false);
                setMsg('File "' + data.fileName +'" successfully uploaded.');
                props.dataChanged(); setPending(false);
                return;
            }
            setMsg( data.Message ); setFile(null); setError(true);
        },2000)
    } 

    return (
        <div className='upload-data-container'>
            <div className='instructions'>
                <p>Make sure you follow the term of service of cloud users.</p>
                <p>Withhold any data management with low security type and terminated usage.</p>
                <p>Check this <a href='/'>Link</a> if you are unsure how to upload data files.</p>
            </div>
            <form className='upload-data' onSubmit={onFileUploadHandler}>
                <label>
                    <span>Upload Data</span>
                    <input type='file' onChange={onFileSelectHandler}/>
                    <button>Send</button>
                </label>
                { AWSmsg && <p className='msg' style={ (error!== null) && error ? {color: 'red'} : {color: 'blue'}}>{AWSmsg}</p> }
                { msg && <p className='msg' style={ (error!== null) && error ? {color: 'red',margin:0} : {color: 'blue',margin:0}}>{msg}</p> }
                {pending && <Loader />}
            </form> 
        </div>
    );
};

export default UploadData;