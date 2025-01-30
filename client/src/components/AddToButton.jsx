import { useState, useEffect } from "react";

export default function ButtonAdd(containerId) {
  const [clickedButton, setClickedButton] = useState([]);

  function handleClick(containerId) {
    setClickedButton(containerId);
  }
  useEffect(() => {
    if (clickedButton !== null) {
      console.log(containerId);
    }
    
  }, [clickedButton]);

  return (
    <button onClick={handleClick}>Inspect</button>
  );
}