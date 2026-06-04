import { useState, type ChangeEvent } from 'react'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [idx, setIdx] = useState(-1);
  const [arr, setArr] = useState<any>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleAdd = () => {
    if(!inputValue.length)
        return;
    
    setArr((arr: string[]) => {
      return [...arr, inputValue];
    });
    setInputValue("");
    setIdx((i)=>i+1);
  }

  const handleRedo = () => {
    if(idx == arr.length-1)
        return;
    setIdx((i) => i+1);
  }

  const handleUndo = () => {
    if(idx == -1)
        return;
    setIdx((i)=>i-1);
  }

  return (
    <>
      <h1>Current Val:</h1>
      <h2>{`${idx == -1 ? "" : arr[idx]}`}</h2>
      <input type="text" name="punit" id="punit" value={inputValue} onChange={handleChange}/>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
    </>
  )
}

export default App
