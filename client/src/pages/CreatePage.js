import React, {useState} from 'react'
import {useHttp} from '../hooks/http.hook'

export const CreatePage = () =>{
    const {loading,  request} = useHttp()
    const [form, setForm] = useState({
        manufacturer: '',
        model: '',
        pixelSize: '',
        heightPixels: '',
        Pixels: ''
    })
    //По параметру 'name' который есть в каждом imput будет обновляться форма
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value})
    }

    // axios.get(`https://url`)
    //     .then(response => {
    //         this.props.setUserProfile(response.data);
    //     });

    const addHandler = async () => {
        try {
            const data = await request('/api/sensor/add', 'POST', {...form})
            console.log('Data' ,data)
        }catch (e){

        }
    }

    return(
        <div className="row">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="Create">Card Title</span>
                    <h5>Нужно добавить Производителя, модель, размер пикселя,
                        высоту и ширину матрицы в кол-во пикселей</h5>
                </div>
                <div>
                    <div className="input-field">
                        <input
                            placeholder="Производитель"
                            id="manufacturer"
                            type="text"
                            name="manufacturer"
                            onChange={changeHandler}
                        />
                        <label htmlFor="manufacturer">Производитель</label>
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Модель"
                            id="model"
                            type="text"
                            name="model"
                            onChange={changeHandler}
                        />
                        <label htmlFor="model">Модель</label>
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Размер пикселя"
                            id="pixelSize"
                            type="text"
                            name="pixelSize"
                            onChange={changeHandler}
                        />
                        <label htmlFor="pixelSize">Размер пикселя</label>
                    </div>
                    <div className="input-field"><input
                        placeholder="Высота (пиксели)"
                        id="heightPixels"
                        type="text"
                        name="heightPixels"
                        onChange={changeHandler}
                    />
                        <label htmlFor="heightPixels">Высота</label>
                    </div>
                   <div className="input-field">
                       <input
                           placeholder="Ширина (пиксели)"
                           id="widthPixels"
                           type="text"
                           name="widthPixels"
                           onChange={changeHandler}
                       />
                       <label htmlFor="widthPixels">Ширина</label>
                   </div>
                </div>
                <div className="card-action">
                    <button className="btn white grey-text"
                            onClick={addHandler}
                            disabled={loading}
                    >
                        Добавить</button>
                    <button className="btn white grey-text" disabled={loading}>Очистить</button>
                </div>
            </div>
        </div>
    )
}

