

const BucketLocation = ( props: {location: String} ) => {
    return (
        <div className="location">Bucket {'>'} {props.location}</div>
    );
};

export default BucketLocation;