import '../style/load.css';

const Load:React.FC = ()=>{

    return <div className="row justify-content-center">
        <div className="col-xl-2">
            <img className="load__img" src="/assets/loading.gif" alt="" />
        </div>
    </div>
}

export default Load;