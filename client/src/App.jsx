import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 class="site-name"><span id="ghost">Ghost</span> <span id="forge">Forge</span></h1>
        <button id="tutorial-button">Help</button> {/* Extract */}
      </header>
      <section class="container categories">
        <div class="sub-container" id="category-list">

        </div>
        {/*  */}
      </section>
    </>
  )
}

export default App
