import React from 'react'
// import {Link} from 'react-router-dom'



export const SensorsList = ({sensors}) => {

    if (!sensors.length){
        return <p className="center">Сенсоров пока нет</p>
    }

    return(
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Производитель</th>
                <th>Модель</th>
                <th>Размер пикселя</th>
                <th>Ширина</th>
                <th>Высота</th>
            </tr>
            </thead>

            <tbody>
            {/*Итерация по массиву links*/}
            {sensors.map((sensor, index) => {
                return(
                    <tr key={sensor._id}>
                        <td>{index + 1}</td>
                        <td>{sensor.manufacturer}</td>
                        <td>{sensor.model}</td>
                        <td>{sensor.pixelSize}</td>
                        <td>{sensor.widthPixels}</td>
                        <td>{sensor.heightPixels}</td>
                        {/*<td>*/}
                        {/*    <Link to={`/detail/${link._id}`}>Открыть</Link>*/}
                        {/*</td>*/}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}