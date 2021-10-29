import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {Loader} from "../сomponents/Loader";
import {SensorsList} from "../сomponents/SensorsList";
import {ModelSearchList} from "./ModelSearchList";

export const SearchedSensors = ({setSensor}) =>{
    const {loading, request} = useHttp()
    const [sensors, setSensors] = useState([])

    // const [model, setModel] = useState('imx')
    // console.log('SearchedSensors: '+ model )
    //const [sensors, setSensors] = useState([])

    // console.log('ComparisonPage model '+model)
    const changeHandler = event => {
        fetch(`/api/sensor/${event.target.value}`, {method: 'get'})
            .then(res => res.json()).then(result => setSensors(event.target.value ? result : {}))
    }


    // const fetchSensors = useCallback(async () => {
    //     try {
    //         const fetched = await  request(`/api/sensor/${model}`, 'GET', null, {})
    //         setSensors(fetched)
    //     }catch (e){
    //         console.log('ComparisonPage: '+ sensors )
    //     }
    // }, [request])
    //
    // useEffect( () => {
    //
    //     fetchSensors()
    // }, [fetchSensors])

    if(loading){
        return <Loader />
    }
    return(
        <>
            <hr/><hr/><hr/>
            <div>
                <input type="text" placeholder="Search..." onChange={changeHandler}/>

                {/*<input type="text" placeholder="Search..." onChange={event => {setModel(event.target.value)}}/>*/}
            </div>

            {!loading && <ModelSearchList sensors={sensors} setSensor={setSensor}/>}
        </>
    )
}