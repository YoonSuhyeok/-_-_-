import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './App.css';

function App() {
  let [input, setInput] = useState();

  function setNumber(numbers){
    setInput(input+numbers);
  }

  return (
    <div className="App">
      <TextField value={input} id="standard-basic" variant="standard" />
      <Button onClick={()=>{setNumber('1')}} variant="outlined" style={{width: '100px'}}>1</Button>
      <Button onClick={()=>{setNumber('2')}} variant="outlined" style={{width: '100px'}}>2</Button>
      <Button onClick={()=>{setNumber('3')}} variant="outlined" style={{width: '100px'}}>3</Button>

    </div>
  );
}

export default App;
