import { useState } from 'react'
import ReactDOM from "react-dom/client";
import List from './components/List';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Final Space</h1>
      <List />
    </div>
  );
}

export default App
