import { useEffect, useState } from 'react';

import './global-network.scss';

const WorldMap = require('react-world-map');

const GlobalNetwork = () => {

    const [selected, onSelect] = useState<string | null>('na');
    const [region,setRegion] = useState<String | null>('North America');
    const [zones,setZones] = useState<number>(43);
    
    useEffect( ()=>{
        switch(selected){
            case 'na': setRegion('North America'); setZones(43); break;
            case 'sa': setRegion('South America'); setZones(17);break;
            case 'af': setRegion('Africa'); setZones(5);break;
            case 'eu': setRegion('Europe'); setZones(37);break;
            case 'as': setRegion('Asia'); setZones(21);break;
            case 'oc': setRegion('Australia'); setZones(25);break;
        }
    },[selected]);
    
    return (
        <section className='global-network-container'>
            <h1>Global Network of AWS Regions</h1>
            <div className='cloud-regions'>
                <span>Total Cloud Zones: 148</span>
                <span>Region {region}: {zones}</span>
            </div>
            <WorldMap selected={ selected } onSelect={ onSelect } multiple={ true } />
        </section>
    );
};

export default GlobalNetwork;