import {useEffect,useState} from 'react';
export const useUpdatauser=(value)=>{
    useEffect(()=>{
        console.log(value);
    },[value])

};
//هوک سفارشی useFetch
export const useFetch=(url)=>{//هوک سفارشی 
    const [data,setData]=useState(null);
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((data)=>setData(data));

    },[url]);
    return [data]

};