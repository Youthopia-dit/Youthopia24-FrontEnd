import React, { useState } from 'react'

const Myaccor = ({question,answer}) => {
    const[show,setShow ]=useState(false);
  return ( 
    <div>
    <div className='main-heading' >
    <h3>{question}</h3>
        <p onClick={()=>setShow(!show)} >{show?"➖" : "➕"}</p>
     
      
    </div>
{show && <p className='answers'>{answer}</p>}
    
    </div>
  )
}

export default Myaccor
