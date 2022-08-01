
const BucketUserStats = ( props: {stats: any} ) => {    
    return (
        <div className="user-stats">
            <h2>Statistics</h2>
            <div>Total Files: <span>{props.stats?.total}</span></div>
            <div>Memory in Use: <span>{(props.stats?.memory).toFixed(1)}MB</span></div>
            <div>Server Location: <span>{props.stats?.server}</span></div>
            <div>Security Type: <span>{props.stats?.SecurityType}</span></div>
            <div>Usage Percentage: <span>{props.stats?.usage}</span></div>
            <div>Billing: <span>{(props.stats?.billing).toFixed(2)}$</span></div>
            <span>{new Date().toDateString()}</span>
        </div>
    );
};

export default BucketUserStats;