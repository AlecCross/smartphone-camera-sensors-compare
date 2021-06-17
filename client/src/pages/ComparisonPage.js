import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {Loader} from "../сomponents/Loader";
// import {SensorsList} from "../сomponents/SensorsList";
import {SearchedSensors} from "../сomponents/SearchedSensors";

export const ComparisonTable = ({sensor1, sensor2, sensor3}) => {
    return (
        <table style={{ tableLayout: "fixed"}}>
            <tbody>
            {/*<tr>*/}
            {/*    <td>ЛОхпидр</td>*/}
            {/*    <td>{sensor1.index}</td>*/}
            {/*    <td>{sensor2.index}</td>*/}
            {/*    <td>{sensor3.index}</td>*/}
            {/*</tr>*/}
            <tr>
                <th>manufacturer</th>
                <td>{sensor1.manufacturer}</td>
                <td>{sensor2.manufacturer}</td>
                <td>{sensor3.manufacturer}</td>
            </tr>
            <tr>
                <th>model</th>
                <td>{sensor1.model}</td>
                <td>{sensor2.model}</td>
                <td>{sensor3.model}</td>
            </tr>
            <tr>
                <th>pixelSize</th>
                <td>{sensor1.pixelSize}</td>
                <td>{sensor2.pixelSize}</td>
                <td>{sensor3.pixelSize}</td>
            </tr>
            <tr>
                <th>widthPixels</th>
                <td>{sensor1.widthPixels}</td>
                <td>{sensor2.widthPixels}</td>
                <td>{sensor3.widthPixels}</td>
            </tr>
            <tr>
                <th>heightPixels</th>
                <td>{sensor1.heightPixels}</td>
                <td>{sensor2.heightPixels}</td>
                <td>{sensor3.heightPixels}</td>
            </tr>
            </tbody>
        </table>
    )
}

export const ComparisonPage = () =>{

    const {loading, request} = useHttp()
    // const {token} = useContext(AuthContext)
    //Функция позволяющая загрузить список
    const [sensor1, setSensor1] = useState({})
    const [sensor2, setSensor2] = useState({})
    const [sensor3, setSensor3] = useState({})

    if(loading){
        return <Loader />
    }
    return(
        <>
            <h1>ComparisonPage</h1>
            <div style={{ display: "flex", flexDirection: "row"}}>
                <div style={{padding: "10px", flexGrow: "1", flexBasis: "0"}}></div>
                <div style={{padding: "10px", flexGrow: "1", flexBasis: "0"}}>
                    <SearchedSensors setSensor ={setSensor1}/>
                </div>
                <div style={{padding: "10px", flexGrow: "1", flexBasis: "0"}}>
                    <SearchedSensors setSensor ={setSensor2}/>
                </div>
                <div style={{padding: "10px", flexGrow: "1", flexBasis: "0"}}>
                    <SearchedSensors setSensor ={setSensor3}/>
                </div>
            </div>
            <ComparisonTable sensor1 = {sensor1} sensor2 = {sensor2} sensor3 = {sensor3}/>
        </>
    )
}