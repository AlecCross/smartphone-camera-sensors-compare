import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
// import {AuthContext} from "../context/AuthContext";
import {Loader} from "../сomponents/Loader";
import {SensorsList} from  "../сomponents/SensorsList"
// списаок ссылок которые есть у пользователя

export const SensorsPage = () =>{

    const [sensors, setSensors] = useState([])
    const {loading, request} = useHttp()
    // const {token} = useContext(AuthContext)
    //Функция позволяющая загрузить список
    const fetchSensors = useCallback(async () => {
        try {
            const fetched = await  request('/api/sensor', 'GET', null, {})
            setSensors(fetched)
        }catch (e){

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
            {!loading && <SensorsList sensors = {sensors}/>}
        </>
    )
}