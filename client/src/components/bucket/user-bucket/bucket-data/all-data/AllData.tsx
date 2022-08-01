import { Fragment, useEffect, useState } from 'react';

import './all-data.scss';

import { GetAllData } from '../../../../../api/UserApiRequests';
import DataList from './data-list/DataList';
import Loader from '../../../../loader/Loader';

const AllData = () => {

    const [data,setData] = useState<any>(null);

    useEffect( ()=>{
        const fetchData = async ()=>{
            const result = await GetAllData(sessionStorage.getItem('token'));            
            if( result.fileList.length > 0 ) {setData(result.fileList); return;}
            setData([]);
        }
        fetchData();
    },[] )

    return (
        <div className='all-data-container'>
            { data!==null ? 
            <Fragment>{ (data?.length > 0) ? <DataList data={data}/> : <p className='empty-list'>No data</p> }</Fragment>
            : <Loader /> }
        </div>
    );
};

export default AllData;