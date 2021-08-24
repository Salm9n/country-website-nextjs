import { useState, useEffect, useContext } from 'react'; 
import NightContext from '../../contexts/nightmode';

export default function JSPractice() {
const [isDark, toggleChecked] = useContext(NightContext);
const handleClick = (event) => {

if (cell == 'two') {
setCell('three')
console.log(cell)
}
if (cell == 'three') {
    setCell('four')
    console.log(cell)
}
}

const buttonClick = (event) => {
    
}

const [cell,setCell] = useState('two')
return (
<>
<table id="outside">
  <tr><td id="t1">one</td></tr>
  <tr><td id="t2" onClick={handleClick}>{cell}</td></tr>
</table>

<button onClick={toggleChecked}>Hi</button>
 </>  
    )


}