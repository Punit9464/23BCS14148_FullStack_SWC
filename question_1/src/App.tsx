import { useRef, useState } from "react"

function App() {
  const [count, setCount] = useState(10);
  const clickRef = useRef(0);

  const handleClick = () => {
    clickRef.current += 1;
    if(clickRef.current % 3 == 0) {
      setCount((c) => c*2);
    }
  }

  return (
    <>
      <h1>Counter Value: {count}</h1>
      <button onClick={handleClick}>Increment/Double</button>
    </>
  )
}

export default App
