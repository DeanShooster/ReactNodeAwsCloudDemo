import './console.scss';
import {BiMemoryCard,BiMicrochip} from 'react-icons/bi';
import {FiDatabase} from 'react-icons/fi';
import {GiNetworkBars} from 'react-icons/gi';
import {MdSecurity} from 'react-icons/md';
import {TbDeviceAnalytics} from 'react-icons/tb';

const Console = () => {
    return (
        <div className="console">
            <div>
                <span><BiMemoryCard/></span>
                <p>Storage</p>
            </div>
            <div>
                <span><BiMicrochip/></span>
                <p>Memory</p>
            </div>
            <div>
                <span><FiDatabase /></span>
                <p>Data</p>
            </div>
            <div>
                <span><GiNetworkBars/></span>
                <p>Network</p>
            </div>
            <div>
                <span><MdSecurity/></span>
                <p>Security</p>
            </div>
            <div>
                <span><TbDeviceAnalytics/></span>
                <p>Analytics</p>
            </div>
        </div>
    );
};

export default Console;