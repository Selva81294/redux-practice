import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAPIFetch } from './features/catAPISlice';

const CatComponent = () => {

const data = useSelector(state => state.cats.cats)
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getAPIFetch());
},[dispatch])

console.log(data);

  return (
    <div className='books'>
        {
          data.map((val,id) => (
            <div key={id} className='eachBook'>
              <img src={val.volumeInfo.imageLinks.thumbnail}/>
              <h2>{val.volumeInfo.title}</h2>
            </div>
          ))
        }
    </div>
  )
}

export default CatComponent