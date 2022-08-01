
const DataList = ( props: {data: any}) => {

    const fileDownloadHandler = async (event: any) => {
        if(event.target.innerHTML[0] === '<' ) return;
        const url = props.data[event.target.innerHTML[0]-1].key;
        window.open(url);
    }

    return (
        <ul onClick={fileDownloadHandler}>
            { (props.data).map( (file: {fileName: string, key: string},index: number)=>{
                return <li key={file.fileName + index} data-value={file}>{index+1}.{file.fileName}</li>
            } )}
        </ul>
    );
};

export default DataList;