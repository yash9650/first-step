import { useEffect, useState } from "react"
import { useSelector ,useDispatch} from "react-redux";
import { getData } from '../store/DiseaseSlice';

const useSearch = (search = "") => {
    const [diseaseList, setDiseaseList] = useState([]);
    const [symptomList, setSymptomList] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const list = useSelector(state => state.disease.data);
    const dispatch = useDispatch();

    const searchSymptom = (symptoms) => {

        const newSymp = symptoms.filter(e => {
            return e.trim().toLowerCase().includes(search.toLowerCase());
        })
        return newSymp;
    }

    useEffect(()=>{
        if(search.length === 0 || list.length === 0){
            setDiseaseList([]);
            setSymptomList([]);
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        const timer = setTimeout(()=>{
            const disease = list.filter((e)=>{
                return e.dName.toLowerCase().includes(search.toLowerCase());
            });
            setDiseaseList(disease);
            const mapSymptom = list.map((e)=>{
                let newSymp = searchSymptom(e.symptoms);
                return {_id: e._id,dName: e.dName, symptoms: newSymp};
            });
            const filteredSymptoms = mapSymptom.filter(e => {
                return e.symptoms.length === 0 ? false : true;
            });
            setIsLoading(false);
            setDiseaseList(disease);
            setSymptomList(filteredSymptoms);
        },800);

        return ()=>{
            clearTimeout(timer);
        }

    },[search,list]);

    useEffect(()=>{
        dispatch(getData());
    },[]);

    return {diseaseList,symptomList,isLoading};

}

export default useSearch;