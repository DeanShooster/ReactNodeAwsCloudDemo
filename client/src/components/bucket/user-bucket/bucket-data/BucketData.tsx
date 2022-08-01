import { Fragment, useEffect, useState } from "react";
import AllData from "./all-data/AllData";

import ClearData from "./clear-data/ClearData";
import UploadData from "./upload-data/UploadData";

const BucketData = ( props: {location: string, dataChanged: Function} ) => {

    const [bucketElement,setBucketElement] = useState<any>(null);

    useEffect( ()=>{
        switch( props.location ){
            case 'Files': setBucketElement(<AllData />); break;
            case 'Upload': setBucketElement(<UploadData dataChanged={props.dataChanged}/>); break;
            case 'Clear': setBucketElement(<ClearData dataChanged={props.dataChanged}/>); break;
            default: setBucketElement(null); break;
        }
    },[props.location, props.dataChanged]);

    return (
        <Fragment> {bucketElement} </Fragment>
    );
};

export default BucketData;