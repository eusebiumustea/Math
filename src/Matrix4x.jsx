import './App.css';
import React, { useState } from 'react';
const Matrics = () => {
    const [x1, setNumber1] = useState(0);
    function onNumber1Changed(e) {
        setNumber1(e.target.value)
    }
    const [x2, setNumber2] = useState(0);
    function onNumber2Changed(e) {
        setNumber2(e.target.value)
    }
    const [x3, setNumber3] = useState(0);
    function onNumber3Changed(e) {
        setNumber3(e.target.value)
    }
    const [x4, setNumber4] = useState(0);
    function onNumber4Changed(e) {
        setNumber4(e.target.value)
    }
    const [x5, setNumber5] = useState(0);
    function onNumber5Changed(e) {
        setNumber5(e.target.value)
    }
    const [x6, setNumber6] = useState(0);
    function onNumber6Changed(e) {
        setNumber6(e.target.value)
    }
    const [y1, setNumber7] = useState(0);
    function onNumber7Changed(e) {
        setNumber7(e.target.value)
    }
    const [y2, setNumber8] = useState(0);
    function onNumber8Changed(e) {
        setNumber8(e.target.value)
    }
    const [y3, setNumber9] = useState(0);
    function onNumber9Changed(e) {
        setNumber9(e.target.value)
    }
    const [y4, setNumber10] = useState(0);
    function onNumber10Changed(e) {
        setNumber10(e.target.value)
    }
    const [y5, setNumber11] = useState(0);
    function onNumber11Changed(e) {
        setNumber11(e.target.value)
    }
    const [y6, setNumber12] = useState(0);
    function onNumber12Changed(e) {
        setNumber12(e.target.value)
    }
    const resultsplit1 = (x1*y1+x2*y3)
    const resultsplit2 = (x3*y1+x4*y3)
    const resultsplit3 = (x1*y2+x2*y4) 
    const resultsplit4 = (x3*y2+x4*y4)
    const solutionsplit1 = [`${x1} x ${y1} + ${x2} x ${y3}`]
    const solutionsplit2 = [`${x3} x ${y1} + ${x4} x ${y3}`]
    const solutionsplit3 = [`${x1} x ${y2} + ${x2} x ${y4}`]
    const solutionsplit4 = [`${x3} x ${y2} + ${x4} x ${y4}`]

        return (
<div className='container'> 
<div className='matrics'>      
        <div className='matric'>
        <div>
            <input className='nr'  type="Number" value={x1} id="nr" onChange={onNumber1Changed} />
            <input className='nr' type="number" value={x2} id="nr" onChange={onNumber2Changed} />
        </div> 
        <div>
            <input className='nr' type="number" value={x3} id="nr" onChange={onNumber3Changed} />
            <input className='nr' type="number" value={x4} id="nr" onChange={onNumber4Changed} />  
        </div>       
        </div>
        <label className='sign'>x</label>
        <div className='matric'>
        <div>
            <input className='nr' type="number" value={y1} id="nr" onChange={onNumber5Changed} />
            <input className='nr' type="number" value={y2} id="nr" onChange={onNumber6Changed} />
        </div>
        <div>
            <input className='nr' type="number" value={y3} id="nr" onChange={onNumber7Changed} />
            <input className='nr' type="number" value={y4} id="nr" onChange={onNumber8Changed} /> 
        </div>     
        </div>
       <input className='submit' type="submit" value="=" for="nr" />
</div>   
    <div className='solve'>
        <h1>Solve: {solutionsplit1} {solutionsplit2} {solutionsplit3} {solutionsplit4}</h1>
    </div>
     <div className='result'>
        <div>
            <h1>{resultsplit1}</h1>
            <h1>{resultsplit2}</h1>
        </div>
        <div>
            <h1>{resultsplit3}</h1>
            <h1>{resultsplit4}</h1>
        </div>
    </div>
</div>
  )
 }
         
export default Matrics;