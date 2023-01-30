import './App.css';
import React, { useState } from 'react';
const Multiples = () => {
    const [Nr1, setNumber1] = useState();
    function onNumber1Changed(e) {
        setNumber1(+e.target.value)
    }
    const [Nr2, setNumber2] = useState();
    function onNumber2Changed(e) {
        setNumber2(+e.target.value)
    }
    const result = [Nr1 * Nr2]
        return (
    <div className='Multiples'>      
            <h1>Inmultiri: </h1>
           
             <input className='case' value={Nr1} onChange={onNumber1Changed} type="Number" for="Nr1" name='Nr1'/>
             <label for="Number"> x </label>
             <input className='case' value={Nr2} onChange={onNumber2Changed} type="Number" for="Nr2" name='Nr2'/>
              <div className='result'><h1>Result: {result}</h1></div>
            
    </div>
        
      )
}
export default Multiples;