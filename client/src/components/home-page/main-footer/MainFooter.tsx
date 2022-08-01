
import './main-footer.scss';
import {IoLogoIonitron} from 'react-icons/io';

const MainFooter = () => {
    return (
        <footer>
            <section>
                <div>
                    <h3>Learn About AWS</h3>
                    <ul>
                        <li>What is AWS?</li>
                        <li>What is Cloud?</li>
                        <li>How it is secured?</li>
                        <li>Cloud Automation</li>
                        <li>What's New</li>
                        <li>Press Releases</li>
                    </ul>
                </div>
                <div>
                    <h3>Developers on AWS</h3>
                    <ul>
                        <li>Developer Center</li>
                        <li>.NET on AWS</li>
                        <li>JavaScript on AWS</li>
                        <li>SDKs and Tools</li>
                    </ul>
                </div>
                <div>
                    <h3>Help</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Support Ticket</li>
                        <li>Knowledge Center</li>
                        <li>Legal</li>
                        <li>AWS Careers</li>
                    </ul>
                </div>
                <span>
                    <IoLogoIonitron />
                </span>
            </section> 
        </footer>
    );
};

export default MainFooter;