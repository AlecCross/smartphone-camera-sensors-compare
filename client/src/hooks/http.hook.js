//Экспорт хук useHttp, который позволяет комфортно работать с асинхронными запросами на http server
//нативный API fetch в формате хуков
//будет нам экспортировать сущности, которые мы сгруперуем в данном модуле.
//Состояние загрузки и ошибки
import {useState, useCallback} from "react";

export const useHttp = () => {
    //Состояние - грузится что-то с сервера или нет
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    //useCallback нужен чтобы Реакт не входил в рекурсию - 2 параметра: Асинхр функция и набор зависимостей
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        //Нужно правильно отобразить запрос
        setLoading(true)

        try {
            if (body){
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            //fetch является браузерным методом
            const response = await fetch(url, {method, body, headers})
            //После того как мы получили ответ с сервера, его нужно распарсить
            const data = await response.json()
            //Если статус ответ "Не ОК" то выдать ошибку или заготовленную с сервера или текущую с фронта
            if (!response.ok) {
                throw  new Error(data.message || 'Что-то пошло не так')
            }
            setLoading(false)
            //Если всё хорошо то просто возвращаем data с сервера
            return data

        } catch (e) {
            //console.log('Catch', e.message)//Catch Некорректные данные при регистрации
            //Eсть ошибка
            setLoading(false)
            //Error из-за данного инстанса
            setError(e.message)
            //Чтобы обрабатывать это в компонентах выкидываем ошибку
            throw e
        }
    },[])

    //Чистилка ошибок    (Экспорт этой функции)
    const clearError = useCallback(() => setError(null), [])
    return {loading, request, error, clearError}
}
