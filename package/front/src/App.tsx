import { useState } from 'react'
import stringdata from '@monorepo/common'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       {stringdata}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
