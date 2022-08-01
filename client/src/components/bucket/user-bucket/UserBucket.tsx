import { useEffect, useState } from "react";
import { GetUserStats } from "../../../api/UserApiRequests";
import BucketData from "./bucket-data/BucketData";

import BucketLocation from "./bucket-location/BucketLocation";
import BucketUserStats from "./bucket-user-stats/BucketUserStats";

const UserBucket = () => {

    const [location,setLocation] = useState<string>('Files');
    const [stats,setStats] = useState<any>(null);
    const [dataChanged,setDataChanged] = useState<boolean>(false);

    useEffect( ()=>{
        const fetchData = async ()=>{
            const result = await GetUserStats(sessionStorage.getItem('token'));
            if( !result.Message ) setStats(result)
        };
        fetchData();
    },[dataChanged]);

    const dataChangeHandler = () => setDataChanged(!dataChanged);

    const allFilesHandler = () => setLocation('Files');
    const uploadFilesHandler = () => setLocation('Upload');
    const clearFilesHandler  = () => setLocation('Clear');

    return (
        <div className="user-bucket-container">
           <h1>Bucket</h1>
           <BucketLocation location={location}/>
            <nav>
                <span onClick={allFilesHandler}>Files</span>
                <span onClick={uploadFilesHandler}>Upload</span>
                <span onClick={clearFilesHandler}>Clear</span>
            </nav>
            <div className="user-stats-data-container">
                {stats && <BucketUserStats stats={stats}/>}
                <BucketData location={location} dataChanged={dataChangeHandler}/>
            </div>
        </div>
    );
};

export default UserBucket;