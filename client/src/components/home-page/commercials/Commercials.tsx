
import {AiFillUnlock} from 'react-icons/ai';
import {GoDatabase} from 'react-icons/go';
import {SiRobotframework} from 'react-icons/si';

const Commercials = () => {
    return (
        <section className="commercials-container">
            <div>
                <span><AiFillUnlock/></span>
                <h3>Raise Your Security Posture</h3>
                <p>Infrastructure and services to elevate your security in the cloud.</p>
            </div>
            <div>
                <span><GoDatabase/></span>
                <h3>Data Compatibility</h3>
                <p>Free trial of the database designed for enterprise JSON workloads.</p>
            </div>
            <div>
                <span><SiRobotframework/></span>
                <h3>Automatic Cloud Management</h3>
                <p>24/7 memory and run time management by the cloud AI - Cloudy.</p>
            </div>
        </section>
    );
};

export default Commercials;