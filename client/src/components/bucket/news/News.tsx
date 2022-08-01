import { useEffect, useLayoutEffect, useState } from "react";

import {GrShieldSecurity,GrVirtualMachine} from 'react-icons/gr';
import {AiOutlineGlobal} from 'react-icons/ai';
import {BiNetworkChart} from 'react-icons/bi';

const News = () => {

    const [currentNews,setCurrentNews] = useState<React.ReactNode | null>(null);
    const [currentIndex,setCurrentIndex] = useState<number>(0);

    const news = [
        <p key='news-1'>
            <span>Because security is job zero. Join us to learn how AWS is innovating in the world of cloud security, and hone your technical skills in expert-led interactive sessions.</span>
            <span className="icon"><GrShieldSecurity /></span>
        </p>,
        <p key='news-2'>
            <span>Global Summits are free events that bring the cloud computing community together to connect, collaborate, and learn about AWS.</span>
            <span className="icon"><AiOutlineGlobal/></span>
        </p>,
        <p key='news-3'>
            <span>Day Online Conference is a free, online training event that will provide a step-by-step introduction to the core AWS services for compute, storage, databases, and networking.</span>
            <span className="icon"><BiNetworkChart /></span>
        </p>,
        <p key='news-4'>
            <span>Machine learning. Automation. Robotics. Space. The four MARS domains are where the next technological leaps into the future will happen.</span>
            <span className="icon"><GrVirtualMachine/></span>
        </p>
    ];

    useEffect( ()=>{
        setCurrentNews(news[0]);
    },[]);

    useLayoutEffect( ()=>{
        setTimeout(() => {
            if( currentIndex+1 === news.length ){
                setCurrentNews(news[0]);
                setCurrentIndex(0);
            } else{
                setCurrentNews(news[currentIndex+1]);
                setCurrentIndex(currentIndex+1);
            }
        }, 7000);
    },[currentIndex,news]);

    return (
        <div className="news-container">
            <h1>News</h1>
            {currentNews}
            <h4>{new Date().toDateString()}</h4>
        </div>
    );
};

export default News;