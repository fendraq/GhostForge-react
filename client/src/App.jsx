import { useState } from 'react'
import data from './data/products.json'
import ItemList from './components/CategoryList.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 className="siteName"><span id="ghost">Ghost</span> <span id="forge">Forge</span></h1>
        <button id="tutorialButton">Help</button> {/* Extract */}
      </header>
      <main>
        <section className="container categories">
          <div className="subContainer" id="categoryList">
            <h2>Materials</h2>
          </div>
          <div className="subContainter categoryList">
            <ul>
              <li className="category">Forged stories
                <ul className="categoryBorder" id="stories">
                  <ItemList data={data} type="story" />
                </ul>
              </li>
              <li className="category">Forge Your Story
                <ul className="categoryBorder" id="itemList">
                  <ItemList data={data} type="element" />
                </ul>
              </li>
              <li className="category">Inscribe on
                <ul className="categoryBorder" id="inscription">
                  <ItemList data={data} type="inscription" />
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section className="container itemCardContainer">
          <div className="itemCard" id="itemCard">
            <div className="sub-container" id="buildTemplate"> 
              <h3 id="itemTitel">Material titel</h3><p>Price: <span className="price">150</span> SEK</p>
              <div className="itemDescriptionContainer">
                <p id="itemDescription">Material description:  </p>
              </div>
              <div className="itemExampleContainer">
                <p id="itemExample">Material example: </p>
              </div>
              <div id="customizer">
                <div>
                  <h4>Customize your material</h4>
                  <div className="form" id="form">
                    --Add customation options--
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="addMaterialDiv">
            {/* Add buttons: 
            <button id="addMaterial">-- Add to Selection --</button>
            <button id="startTutorial">-- Start Tutorial --</button> */}
          </div>
        </section>
        <section className="container selection">
          <div className="subContainer" id="selectionHeader">
            <h2 id="selectionTitle">Made Selection</h2>
            <div id="selectionInfo">
              <div className="slectionNrItems">
                {/* title: Materials:
                nr of items: iterate */}
              </div>
              <div className="selectionPrice">
                <h4>Price: </h4><h4 id="selectionPrice">0000</h4>
              </div>
            </div>
          </div>
          <div className="subContainer selectionItems">
            <ul id="selectionItemDetails">
              {/* Add items from Card */}
            </ul>
          </div>
          <div className="toForge">
            <button id="toForge">To Forge</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
