import React, { useState } from 'react';
import {questions} from './data';
import"./Accordian1.css";
import Myaccor from './Myaccor';




const Accordian = () => {
  const [Data,setData]=useState(questions); 
  return (

    <div>
      <section className='main' >
      <h1>Frequently Asked Questions (FAQs)</h1>
      <hr />
    {
      Data.map((curelem)=>{
        const { id }=curelem;
        return <Myaccor key={id} {...curelem} />
      })  
    }</section>
    </div>
  )
}

export default Accordian
