import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {Loader} from "../сomponents/Loader";
import {SensorsList} from "../сomponents/SensorsList";

export const ComparisonPage = () =>{
    const model = '3'

    const [sensors, setSensors] = useState([])
    const {loading, request} = useHttp()
    // const {token} = useContext(AuthContext)
    //Функция позволяющая загрузить список
    const fetchSensors = useCallback(async () => {
        try {
            const fetched = await  request(`/api/sensor/${model}`, 'GET', null, {})
            setSensors(fetched)
        }catch (e){
            console.log('ComparisonPage: '+ sensors )
        }
    }, [request])

    useEffect( () => {
        fetchSensors()
    }, [fetchSensors])

    if(loading){
        return <Loader />
    }

    return(
        <>
            <h1>ComparisonPage</h1>
            {!loading && <SensorsList sensors = {sensors}/>}
        </>
    )
}