import s from './CurrencyDushbord.module.css';
import { useState, useEffect } from "react";
import fetchExchangeRate from '../../services/CurrencyApi';





const CurrencyDushbord=()=>{
    const [data, dataSet]=useState([])


useEffect(()=>{
    async function fetchData(){
    const data = await fetchExchangeRate();
    dataSet(data)
}
fetchData();
}, [])
return(
    <>
    <ul className={s.list}>
        {data.map(({buy, sale,ccy})=>(
            <li className={s.item}>
                <span>{buy}</span>
                <span>{sale}</span>
                <span>{ccy}</span>
            </li>
        ))}
    </ul>
    </>
)


}
export default CurrencyDushbord

