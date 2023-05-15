import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false)
  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const handleClear = () => {
    setInput("");
    setResult(0);
    setShowHistory(false)
    setHistory([])
  };

  const handleEquals = () => {
    try {
      setResult(eval(input));
      setHistory([...history, input]);
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  const handleHistory = () => {
    setShowHistory(true)
  };

  return (
    <div>
      <Box>
        {showHistory ? (<TextField variant="outlined" sx={{ backgroundColor: "white", width: "350px",  borderRadius: "5px" }} type="text" value={history}/>):("")}
      </Box>
      <Box>
        {result ? (<TextField variant="outlined" sx={{ backgroundColor: "white", width: "350px", marginBottom: "20px", borderRadius: "5px" }} type="text" value={result} readOnly />) : (<TextField variant="outlined" sx={{ backgroundColor: "white", width: "350px", marginBottom: "20px", borderRadius: "5px" }} type="text" value={input} readOnly />)}
      </Box>
      <Box sx={{ width: '100%', height: '100%' ,marginBottom:"10px"}}>
        <Button variant="outlined" sx={{ backgroundColor: '#C5C5C5', color: "black", borderRadius: "50%", width: "50px", height: "60px", fontSize: "25px"}}  onClick={handleClear}>C</Button>
        <Button variant="outlined" sx={{ backgroundColor: '#C5C5C5', color: "black", borderRadius: "50%", width: "50px", height: "60px", fontSize: "10px", marginLeft: "20px" }} onClick={handleHistory}>History</Button>
        <Button value="%" variant="outlined" sx={{ backgroundColor: '#C5C5C5', color: "black", borderRadius: "50%", width: "50px", height: "60px", fontSize: "25px", marginLeft: "20px" }} onClick={handleInput}>%</Button>
        <Button value="/" variant="outlined" sx={{ backgroundColor: '#FFA500', color: "white", borderRadius: "50%", width: "50px", height: "60px", fontSize: "25px", marginLeft: "20px" }} onClick={handleInput}>/</Button>
      </Box>
      <Box sx={{width: '100%', height: '100%', marginBottom:"10px"}}>
        <Button value="7"  sx={{ backgroundColor: 'gray', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px"}} onClick={handleInput}>7</Button>
        <Button value="8" variant="outlined" sx={{ backgroundColor: 'gray', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px", marginLeft:"20px"}} onClick={handleInput}>8</Button>
        <Button value="9" variant="outlined" sx={{ backgroundColor: 'gray', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px", marginLeft:"20px"}} onClick={handleInput}>9</Button>
        <Button value="*" variant="outlined" sx={{ backgroundColor: '#FFA500', color: "white", borderRadius: "50%", width: "50px", height: "60px", fontSize: "25px", marginLeft: "20px" }} onClick={handleInput}>*</Button>
      </Box>
      <Box sx={{ width: '100%', height: '100%', marginBottom:"10px" }}>
        <Button value="4" variant="outlined" sx={{ backgroundColor: 'gray', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px"}} onClick={handleInput}>4</Button>
        <Button value="5" variant="outlined" sx={{ backgroundColor: 'gray', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px", marginLeft:"20px"}} onClick={handleInput}>5</Button>
        <Button value="6" variant="outlined" sx={{ backgroundColor: 'gray', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px", marginLeft:"20px"}} onClick={handleInput}>6</Button>
        <Button value="-" variant="outlined" sx={{ backgroundColor: '#FFA500', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px", marginLeft:"20px"}} onClick={handleInput}>-</Button>
      </Box >
      <Box sx={{ width: '100%', height: '100%', marginBottom:"10px" }}>
        <Button value="1" variant="outlined" sx={{ backgroundColor: 'gray', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px"}} onClick={handleInput}>1</Button>
        <Button value="2" variant="outlined" sx={{ backgroundColor: 'gray', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px", marginLeft:"20px"}} onClick={handleInput}>2</Button>
        <Button value="3" variant="outlined" sx={{ backgroundColor: 'gray', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px", marginLeft:"20px"}} onClick={handleInput}>3</Button>
        <Button value="+" variant="outlined" sx={{ backgroundColor: '#FFA500', color: "white", borderRadius: "50%", width: "50px", height: "60px", fontSize: "25px", marginLeft: "20px" }} onClick={handleInput}>+</Button>
        
      </Box >
      <Box sx={{ width: '100%', height: '100%', marginBottom: "10px" }}>
        <Button value="0" variant="outlined" sx={{ backgroundColor: 'gray', color: "white", borderRadius: "50px", width:"150px", height:"60px", fontSize: "25px"}} onClick={handleInput}>0</Button>
        <Button value="." variant="outlined" sx={{ backgroundColor: 'gray', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px", marginLeft:"20px"}} onClick={handleInput}>.</Button>
        <Button variant="outlined" sx={{ backgroundColor: '#FFA500', color: "white", borderRadius: "50%", width:"50px", height:"60px", fontSize: "25px", marginLeft:"20px"}} onClick={handleEquals}>=</Button>
      </Box >
    </div>
  );
}

export default Calculator;
