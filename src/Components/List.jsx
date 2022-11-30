import { useLocation, useNavigate } from "react-router-dom"

export default function List() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const clickHandler = (e) => {
        navigate(`/disease/${e._id}`);
    }

    return <div>
        {state.diseaseList.length > 0 && <h2>Disease List: </h2>}<br />
        <span>{state.diseaseList.map((e) => <div key={e._id}>
            <button onClick={() => clickHandler(e)} className='btn btn-link'
                style={{ textDecoration: 'none', color: 'black', width: '100%', textAlign: 'left' }}>
                {e.dName} </button><hr /></div>)}</span>
        <br />{state.symptomList.length > 0 && <h2>Symptoms List: </h2>}<br />
        {state.symptomList.map((e) => {
            return e.symptoms.map((ele, i) => {
                return <div key={e._id + i}>
                    <button onClick={() => clickHandler(e)} className='btn btn-link'
                        style={{ textDecoration: 'none', color: 'black', width: '100%', textAlign: 'left' }}>
                        {ele} </button><hr /></div>
            })
        })}
    </div>
}