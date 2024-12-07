import React, { useEffect, useState } from 'react';
import {v4 as uuid4} from 'uuid';

type dataWithID = {
    id: string,
    person: string
};

type NameOnly = {
    name: string
}
export const APIFetch:React.FC = () => {

    const [fetchData, setFetchData] = useState<NameOnly[]>([]);
    const [dataWithID, setDataWithID] = useState<dataWithID[]>([]);
    const [error, setError] = useState<string>('');
    // const [] = useState();

    useEffect(() => {
        const fetchAPI = async() => {
            try{
                const response = await fetch('https://swapi.de/api/people/?format=json');
                if(response.ok) {
                    const data = await response.json();
                    console.log(data.results);
                    setFetchData(data.results.map((ele:any) => {return {name: ele.name}}))
                } else {
                    throw new Error('Some API issue');
                }
            }
            catch(error:any) {
                setError(error.message)
            }
        }
        fetchAPI();
    },[])

    useEffect(() => {
        setDataWithID(fetchData.map(ele => {return {id: uuid4(), person: ele.name}}))
    }, [fetchData])

    return(
        <div>
            <h1>API Fetch</h1>
            {dataWithID && 
                <ol>
                    {dataWithID.map((data) => (
                        <li key={data.id}>{data.person}</li>
                    ))}
                </ol>
            }
            { error && <h3>{error}</h3>}
        </div>
    )
}