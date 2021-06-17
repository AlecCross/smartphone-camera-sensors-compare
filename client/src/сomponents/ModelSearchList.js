import React from 'react'
import {useHttp} from "../hooks/http.hook";

// export const SensorTable = (props) => {
//     return (
//         <table>
//             <tbody>
//             <tr><td></td><td>{props.sensor.index}</td></tr>
//             <tr><td>{props.sensor.manufacturer}</td></tr>
//             <tr><td>{props.sensor.model}</td></tr>
//             <tr><td>{props.sensor.pixelSize}</td></tr>
//             <tr><td>{props.sensor.widthPixels}</td></tr>
//             <tr><td>{props.sensor.heightPixels}</td></tr>
//             </tbody>
//         </table>
//     )
// }

export const ModelSearchList = ({sensors, setSensor}) => {

    if (!sensors.length) {
        return <p className="center">Сенсоров пока нет</p>
    }

    function handleClick(e, sensor) {
        e.preventDefault();
        setSensor(sensor)
    }

    return (
        sensors.map((sensor, index) => {
            return (
                <p key={index}><a onClick={(e) => handleClick(e, sensor)}>
                    {sensor.model}
                </a></p>
            )
        })
    )
}