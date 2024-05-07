// import { useState } from 'react'
import amikomLogo from './assets/amikom.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={amikomLogo} className="logo react" alt="Logo Amikom" />
        </a>
      </div>
      <h1>UJIAN TENGAH SEMESTER</h1>
      <h1>Digital Bisnis</h1>
      <h3>21.11.4154 Akmal Fauzan Restu Agung | 21.11.4191 Muhammad Rizky | 21.11.4213 Muhammad Faishal Ali Dhiaulhaq</h3>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
