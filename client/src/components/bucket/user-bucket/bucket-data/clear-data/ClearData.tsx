import { useState } from 'react';

import './clear-data.scss';

import { ClearAllData } from '../../../../../api/UserApiRequests';

const ClearData = ( props: {dataChanged: Function} ) => {

    const [msg,setMsg] = useState<string | null>(null);

    const form = (event: any) => event.preventDefault(); 

    const onClearDataHandler = async () => { // Delete Data
        const data = await ClearAllData(sessionStorage.getItem('token'));
        setMsg(data.Message); props.dataChanged();
    }

    return (
        <div className='clear-data-container'>
            <form onSubmit={form}>
                <p>Are you sure you want to clear your Data?</p>
                <div>
                    <button onClick={onClearDataHandler} >Yes</button>
                    <button>No</button>
                </div>
                {msg && <p className='serverMsg'>{msg}</p>}
            </form>
        </div>
    );
};

export default ClearData;